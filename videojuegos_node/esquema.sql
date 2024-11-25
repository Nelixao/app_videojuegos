SET NAMES 'UTF8MB4';
DROP DATABASE IF EXISTS tienda;
CREATE DATABASE IF NOT EXISTS tienda DEFAULT CHARACTER SET UTF8MB4;
USE tienda;

# -----------------------------------
# Base de Datos Pagina Web


CREATE TABLE roles(
    id_rol      INT NOT NULL AUTO_INCREMENT,
    tipo        VARCHAR(30),
    PRIMARY KEY(id_rol)
);

CREATE TABLE usuarios(
    id_usuario      INT NOT NULL AUTO_INCREMENT,
    nombre          varchar(50) NOT NULL,
    ap_paterno      varchar(50) NOT NULL,
    correo          varchar(50) NOT NULL,
    username        varchar(50) NOT NULL,
    pass			varchar(200) NOT NULL,
    token           varchar(50),
    confirmar	    tinyint(1) 	DEFAULT 0,
    id_rol			INT NOT NULL,	

    PRIMARY KEY(id_usuario),
    FOREIGN KEY(id_rol) REFERENCES roles(id_rol)
);

CREATE TABLE pagos(
    id_pago                 INT NOT NULL AUTO_INCREMENT,
    nombre_en_tarjeta       varchar(30) NOT NULL,
    numero_en_tarjeta       INT(16) NOT NULL,
    vencimiento             DATETIME NOT NULL,
    direccion               varchar(100) NOT NULL,
    id_usuario				INT NOT NULL,

    PRIMARY KEY(id_pago),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
);


CREATE TABLE pedidos (
    id_pedido   INT NOT NULL AUTO_INCREMENT,
    fecha       DATE NOT NULL,
    total       FLOAT NOT NULL,
    id_usuario	INT NOT NULL,
    id_pago		INT NOT NULL,	

    PRIMARY KEY(id_pedido),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_pago) REFERENCES pagos(id_pago)
);



CREATE TABLE plataformas(
    id_plataforma   INT NOT NULL AUTO_INCREMENT,
    nombre          varchar(20) NOT NULL,
    PRIMARY KEY(id_plataforma)
);


CREATE TABLE videojuegos(
    id_videojuego   INT NOT NULL AUTO_INCREMENT,
    titulo          varchar(50) NOT NULL,
    imagen          varchar(255) NOT NULL,
    trailer         varchar(255) NOT NULL,
	
    PRIMARY KEY(id_videojuego)
);

CREATE TABLE videojuego_plataformas(
    id_plataforma	INT NOT NULL,
    id_videojuego	INT NOT NULL,
    stock       	INT NOT NULL,
    costo       	FLOAT NOT NULL,
    precio      	FLOAT NOT NULL,
    
    PRIMARY KEY (id_plataforma, id_videojuego),
    FOREIGN KEY(id_plataforma) REFERENCES plataformas(id_plataforma),
    FOREIGN KEY(id_videojuego) REFERENCES videojuegos(id_videojuego)
);

CREATE TABLE pedido_videojuegos(
	id_pedido		INT NOT NULL,
    id_videojuego	INT NOT NULL,
    cantidad        INT(10) NOT NULL,
    FOREIGN KEY(id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY(id_videojuego) REFERENCES videojuegos(id_videojuego)
);


# Insertando Datos

# Roles
INSERT INTO roles(tipo) VALUES
("Administrador"),
("Usuario");

# Plataforma 
INSERT INTO plataformas(nombre) VALUES
("Xbox"),
("PlayStation"),
("Nintendo");





#VIDEOJUEGO

-- Insertar datos en la tabla videojuego
INSERT INTO videojuegos (titulo, imagen, trailer)
VALUES 
('Cyberpunk 2077', '/image/games/ciber.jpg', 'https://www.youtube.com/embed/8X2kIfS6fb8?si=szMiLdO-r_ZXkmFT'),
('Gears of War 3', '/image/games/gears.jpg', 'https://www.youtube.com/embed/n7Te5fcnrUA?si=RgRcW9zQEs_69eng'),
('Halo 2', '/image/games/halo.jpg', 'https://www.youtube.com/embed/kjN1eWhzPeA?si=GF-lIpUlCFAFe-0h'),
('Injustice 2', '/image/games/injustice.jpg', 'https://www.youtube.com/embed/G50rQ6SRCvQ?si=LfDwL9VLP-s4_6Kf'),
('Red Dead Redemption 2', '/image/games/red.jpg', 'https://www.youtube.com/embed/gmA6MrX81z4?si=l7R05a4r566w--N8'),
('Elden Ring', '/image/games/elden.jpg', 'https://www.youtube.com/embed/K_03kFqWfqs?si=F8QpjYVOtNiHZt3K'),
('God of War Ragnarok', '/image/games/gow.jpg', 'https://www.youtube.com/embed/F3jePdO9_jc?si=g8TxxtOtzVt8omL0'),
('GTA V', '/image/games/gta.jpg', 'https://www.youtube.com/embed/hvoD7ehZPcM?si=p-SbAnRvnmYoIv7f'),
('Resident Evil 4', '/image/games/resident.jpg', 'https://www.youtube.com/embed/E69tKrfEQag?si=5e8NerwJ_X1244dM'),
('The Last of Us 2', '/image/games/tlou.jpg', 'https://www.youtube.com/embed/-llaUBqovHw?si=9M-wQPtxXmMQx9mV'),
('Cuphead', '/image/games/cup.png', 'https://www.youtube.com/embed/NN-9SQXoi50?si=86YzOUjjwhTLKDNg'),
('Mario Bros', '/image/games/supermario.png', 'https://www.youtube.com/embed/6wTFy-pJFMI?si=7H72S0Y44b-PEHh1'),
('Splatoon 3', '/image/games/splatoon.png', 'https://www.youtube.com/embed/GUYDXVDLmns?si=QdQBt2xcSGKvVWyf'),
('Super Smash Bros', '/image/games/smash.png', 'https://www.youtube.com/embed/WShCN-AYHqA?si=GOaDonn5yYP7OOXe'),
('Tears of the Kingdom', '/image/games/zelda.jpg', 'https://www.youtube.com/embed/sjxLF4IYnJc?si=nWDSxREiLeNb8Lve'),
('Breath of the Wild', '/image/games/breath.png', 'https://www.youtube.com/embed/zw47_q9wbBE'),
('Doom', '/image/games/doom.png', 'https://www.youtube.com/embed/RO90omga8D4'),
('Final Fantasy', '/image/games/ff.png', 'https://www.youtube.com/embed/mDa45U8AKYU?si=cbmckya9_9b4f_oa'),--
('Forza Horizon', '/image/games/forza.png', 'https://www.youtube.com/embed/FYH9n37B7Yw'),
('Hellblade', '/image/games/hellblade.jpg', 'https://www.youtube.com/embed/6QLfqX7vINg'),
('Horizon Zero Dawn', '/image/games/horizon.png', 'https://www.youtube.com/embed/wzx96gYA8ek'),
('Metroid', '/image/games/metroid.png', 'https://www.youtube.com/embed/mMAgmdR8jwU?si=_JMZku3_2vnn5rsX'),--
('Mario Kart 8', '/image/games/mk8.png', 'https://www.youtube.com/embed/tKlRN2YpxRE'),
('Spider-Man', '/image/games/spiderman.png', 'https://www.youtube.com/embed/cXSpEmPmbfc?si=_BpnwkceKiFJaxLk'),
('Among Us', '/image/games/amongus.jpg', 'https://www.youtube.com/embed/TsIZD1ic2Dg?si=yzFBEblSXj-UQ041');--

#videojuego_plataforma

-- Insertar datos en la tabla de relación videojuego_plataforma para Xbox
INSERT INTO videojuego_plataformas (id_videojuego, id_plataforma, costo, precio, stock)
VALUES
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Cyberpunk 2077'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 420.99, 490.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Gears of War 3'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 320.99, 390.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Halo 2'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 220.99, 290.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Injustice 2'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 340.99, 410.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Red Dead Redemption 2'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 430.99, 500.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Elden Ring'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 450.99, 520.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'GTA V'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 410.99, 480.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Resident Evil 4'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 370.99, 440.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Cuphead'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 300.99, 370.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Among Us'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Xbox'), 99.99, 169.99, 100);


-- Insertar datos en la tabla de relación videojuego_plataforma para PlayStation
INSERT INTO videojuego_plataformas (id_videojuego, id_plataforma, costo, precio, stock)
VALUES
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Cyberpunk 2077'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 420.99, 510.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Injustice 2'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 340.99, 430.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Red Dead Redemption 2'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 430.99, 520.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Elden Ring'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 450.99, 540.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'God of War Ragnarok'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 460.99, 550.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'GTA V'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 410.99, 500.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Resident Evil 4'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 370.99, 460.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'The Last of Us 2'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 440.99, 530.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Cuphead'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 300.99, 390.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Among Us'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'PlayStation'), 119.99, 210.99, 100);

-- Insertar datos en la tabla de relación videojuego_plataforma para Nintendo
INSERT INTO videojuego_plataformas (id_videojuego, id_plataforma, costo, precio, stock)
VALUES
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Cuphead'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 300.99, 410.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Mario Bros'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 280.99, 390.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Splatoon 3'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 260.99, 370.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Super Smash Bros'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 340.99, 450.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Tears of the Kingdom'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 360.99, 470.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Metroid'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 320.99, 430.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Mario Kart 8'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 310.99, 420.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Breath of the Wild'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 400.99, 510.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Doom'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 280.99, 390.99, 100),
((SELECT id_videojuego FROM videojuegos WHERE titulo = 'Among Us'), (SELECT id_plataforma FROM plataformas WHERE nombre = 'Nintendo'), 120.99, 230.99, 100);


-- Usuarios por default --

INSERT INTO usuarios (nombre, ap_paterno, correo, username, pass, token, confirmar, id_rol) VALUES
('Hugo', 'Perez', 'perez.hugo.3010@gmail.com', 'hugopzz', '$2a$08$r1cIsiV0dsiJue3PHEsovOWxNiG9BnZjlAeiNFevecQ/rwcz65KBm', 'unmpkc5pdrg1idgps8t6', 1, 2),
('Eder', 'Avalos', 'ederaj@gmail.com', 'ederaj', '$2a$08$17YzY2ecFsLvwgNyea8zrunndoo09hDHrbljeEuzwFyjrMU1oizjS', '8em5ppj1ej81idgpspjf', 1, 1);

