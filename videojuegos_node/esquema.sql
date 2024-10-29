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
