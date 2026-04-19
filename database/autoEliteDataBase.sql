-- TechAssist - Sistema de Aprendizaje Interactivo
-- Copyright (c) 2024 TechAssist
-- Autor: Angel Jesús Romero Pérez
-- 
-- Este archivo es parte de TechAssist y está protegido por derechos de autor.
-- Uso no autorizado de este código está prohibido.

CREATE DATABASE IF NOT EXISTS autoEliteDataBase;
USE autoEliteDataBase;

DROP TABLE IF EXISTS historial_usuarios;
DROP TABLE IF EXISTS tokens_sesion;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE DEFAULT NULL,
    email VARCHAR(100) UNIQUE DEFAULT NULL, 
    nivel TINYINT DEFAULT 1,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultima_sesion TIMESTAMP NULL DEFAULT NULL,
    estado_sesion ENUM('Activa', 'Cerrada', 'Eliminada') DEFAULT 'Cerrada'
);

CREATE TABLE IF NOT EXISTS tokens_sesion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha_expiracion TIMESTAMP NULL DEFAULT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS historial_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo_cambio ENUM('login', 'logout', 'registro', 'modificacion', 'eliminacion', 'intento-eliminacion') NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    estado_sesion ENUM('Activa', 'Cerrada', 'Eliminada') DEFAULT 'Cerrada',
    fecha_cambio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dispositivo VARCHAR(255) NULL,
    navegador VARCHAR(255) NULL,
    ip_address VARCHAR(45) NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE INDEX idx_historial_usuario ON historial_usuarios(usuario_id);
CREATE INDEX idx_historial_fecha ON historial_usuarios(fecha_cambio);
CREATE INDEX idx_tokens_usuario ON tokens_sesion(usuario_id);
CREATE INDEX idx_tokens_activos ON tokens_sesion(activo, fecha_expiracion);
CREATE INDEX idx_user_email ON usuarios(email);
CREATE INDEX idx_user_status ON usuarios(estado_sesion);

-- Trigger para limpiar tokens expirados
DELIMITER //
CREATE TRIGGER before_token_insert 
BEFORE INSERT ON tokens_sesion
FOR EACH ROW
BEGIN
    SET NEW.fecha_expiracion = DATE_ADD(NOW(), INTERVAL 1 YEAR);
END//

-- Evento para limpiar tokens viejos
CREATE EVENT clean_expired_tokens
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
    DELETE FROM tokens_sesion 
    WHERE fecha_expiracion < NOW() OR activo = FALSE;
END//
DELIMITER ;