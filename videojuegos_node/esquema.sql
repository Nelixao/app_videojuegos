SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS tienda;
CREATE DATABASE IF NOT EXISTS tienda DEFAULT CHARACTER SET UTF8MB4;
USE tienda;

-- Creación de la tabla videojuegos sin id, usando data_id como primary key
CREATE TABLE videojuegos (
    data_id                INTEGER(50) NOT NULL AUTO_INCREMENT,         -- ID para asociar (ahora clave primaria)
    consola                VARCHAR(50) NOT NULL,         -- Consola (Xbox, PlayStation, Nintendo)
    titulo                 VARCHAR(100) NOT NULL,        -- Título del videojuego
    precio                 DECIMAL(10, 2) NOT NULL,      -- Precio del videojuego
    imagen                 VARCHAR(255) NOT NULL,        -- Ruta de la imagen
    video_link             VARCHAR(255) NOT NULL,       -- Link del video
    PRIMARY KEY (data_id)                                -- Definir data_id como clave primaria
) DEFAULT CHARACTER SET UTF8MB4;

-- Borrar todos los registros previos de la tabla (si existen)
DELETE FROM videojuegos;

-- Reiniciar el autoincremento
ALTER TABLE videojuegos AUTO_INCREMENT = 1;

-- Insertar datos de Xbox
INSERT INTO videojuegos (consola, titulo, precio, imagen, video_link) 
VALUES 
('Xbox', 'Cyberpunk 2077', 499.00, 'image/games/ciber.jpg', 'https://www.youtube.com/embed/8X2kIfS6fb8?si=szMiLdO-r_ZXkmFT'),
('Xbox', 'Gears of War 3', 399.00, 'image/games/gears.jpg', 'https://www.youtube.com/embed/n7Te5fcnrUA?si=RgRcW9zQEs_69eng'),
('Xbox', 'Halo 2', 299.00, 'image/games/halo.jpg', 'https://www.youtube.com/embed/kjN1eWhzPeA?si=GF-lIpUlCFAFe-0h'),
('Xbox', 'Injustice 2', 399.00, 'image/games/injustice.jpg', 'https://www.youtube.com/embed/G50rQ6SRCvQ?si=LfDwL9VLP-s4_6Kf'),
('Xbox', 'Red Dead Redemption 2', 499.00, 'image/games/red.jpg', 'https://www.youtube.com/embed/gmA6MrX81z4?si=l7R05a4r566w--N8');

-- Insertar datos de PlayStation
INSERT INTO videojuegos (consola, titulo, precio, imagen, video_link)
VALUES
('PlayStation', 'Elden Ring', 499.00, 'image/games/elden.jpg', 'https://www.youtube.com/embed/K_03kFqWfqs?si=F8QpjYVOtNiHZt3K'),
('PlayStation', 'God of War Ragnarok', 499.00, 'image/games/gow.jpg', 'https://www.youtube.com/embed/F3jePdO9_jc?si=g8TxxtOtzVt8omL0'),
('PlayStation', 'GTA V', 499.00, 'image/games/gta.jpg', 'https://www.youtube.com/embed/hvoD7ehZPcM?si=p-SbAnRvnmYoIv7f'),
('PlayStation', 'Resident Evil 4', 499.00, 'image/games/resident.jpg', 'https://www.youtube.com/embed/E69tKrfEQag?si=5e8NerwJ_X1244dM'),
('PlayStation', 'The Last of Us 2', 499.00, 'image/games/tlou.jpg', 'https://www.youtube.com/embed/-llaUBqovHw?si=9M-wQPtxXmMQx9mV');

-- Insertar datos de Nintendo
INSERT INTO videojuegos (consola, titulo, precio, imagen, video_link)
VALUES
('Nintendo', 'Cuphead', 399.00, 'image/games/cup.png', 'https://www.youtube.com/embed/NN-9SQXoi50?si=86YzOUjjwhTLKDNg'),
('Nintendo', 'Mario Bros', 399.00, 'image/games/supermario.png', 'https://www.youtube.com/embed/6wTFy-pJFMI?si=7H72S0Y44b-PEHh1'),
('Nintendo', 'Splatoon 3', 299.00, 'image/games/splatoon.png', 'https://www.youtube.com/embed/GUYDXVDLmns?si=QdQBt2xcSGKvVWyf'),
('Nintendo', 'Super Smash Bros', 499.00, 'image/games/smash.png', 'https://www.youtube.com/embed/WShCN-AYHqA?si=GOaDonn5yYP7OOXe'),
('Nintendo', 'The Legend of Zelda', 499.00, 'image/games/zelda.jpg', 'https://www.youtube.com/embed/sjxLF4IYnJc?si=nWDSxREiLeNb8Lve');


# -----------------------------------
# Base de Datos Pagina Web

SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS pagina_web;
CREATE DATABASE IF NOT EXISTS pagina_web DEFAULT CHARACTER SET UTF8MB4;
USE pagina_web;


CREATE TABLE roles(
    id_rol      INT NOT NULL AUTO_INCREMENT,
    tipo        VARCHAR(30),
    PRIMARY KEY(id_rol)
);

CREATE TABLE usuario(
    id_usuario      INT NOT NULL AUTO_INCREMENT,
    nombre          varchar(50) NOT NULL,
    ap_materno      varchar(50) NOT NULL,
    ap_paterno      varchar(50) NOT NULL,
    correo          varchar(50) NOT NULL,
    telefono        varchar(50) NOT NULL,
    username        varchar(50) NOT NULL,
    id_rol			INT NOT NULL,	

    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
);

CREATE TABLE pago(
    id_pago                 INT NOT NULL AUTO_INCREMENT,
    nombre_en_tarjeta       varchar(30),
    numero_en_tarjeta       INT(16),
    vencimiento             DATETIME,
    id_usuario				INT,

    PRIMARY KEY(id_pago),
    FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario)
);


CREATE TABLE pedido (
    id_pedido   INT NOT NULL AUTO_INCREMENT,
    fecha       DATE,
    total       INT,
    id_usuario	INT,
    id_pago		INT,	

    PRIMARY KEY(id_pedido),
    FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY(id_pago) REFERENCES pago(id_pago)
);



CREATE TABLE plataforma(
    id_plataforma   INT NOT NULL AUTO_INCREMENT,
    nombre          varchar(20),
    PRIMARY KEY(id_plataforma)
);


CREATE TABLE videojuego(
    id_videojuego   INT NOT NULL AUTO_INCREMENT,
    titulo          varchar(50) NOT NULL,
    imagen          varchar(255) NOT NULL,
    trailer         varchar(255) NOT NULL,
    costo       	INT,
    precio      	INT,
	
    PRIMARY KEY(id_videojuego)
);

CREATE TABLE videojuego_plataforma(
    id_plataforma	INT,
    id_videojuego	INT,
    stock       	INT,
    
    FOREIGN KEY(id_plataforma) REFERENCES plataforma(id_plataforma),
    FOREIGN KEY(id_videojuego) REFERENCES videojuego(id_videojuego)
);

CREATE TABLE pedido_videojuego(
	id_pedido		INT,
    id_videojuego	INT,
    cantidad        INT(10),
    FOREIGN KEY(id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY(id_videojuego) REFERENCES videojuego(id_videojuego)
);


# Insertando Datos

# Roles
INSERT INTO roles(tipo) VALUES
("Administrador"),
("Usuario");

# Plataforma 
INSERT INTO plataforma(nombre) VALUES
("Xbox"),
("PlayStation"),
("Nintendo");

# USUARIO
INSERT INTO usuario (nombre, ap_materno, ap_paterno, correo, telefono, username, id_rol) VALUES
('Juan', 'Pérez', 'García', 'juan.perez@gmail.com', '5551234567', 'juanp', 1),
('María', 'López', 'Hernández', 'maria.lopez@yahoo.com', '5552345678', 'mlopez', 1),
('Carlos', 'Sánchez', 'Martínez', 'carlos.sanchez@hotmail.com', '5553456789', 'carloss', 1),
('Ana', 'Gómez', 'Jiménez', 'ana.gomez@outlook.com', '5554567890', 'anag', 1),
('Luis', 'Ramírez', 'Flores', 'luis.ramirez@gmail.com', '5555678901', 'luisrf', 1),
('Elena', 'Torres', 'Reyes', 'elena.torres@yahoo.com', '5556789012', 'elenat', 1),
('Javier', 'Morales', 'Cruz', 'javier.morales@hotmail.com', '5557890123', 'javierm', 1),
('Sofía', 'Vásquez', 'Salinas', 'sofia.vasquez@outlook.com', '5558901234', 'sofiav', 2);

