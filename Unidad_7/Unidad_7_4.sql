DROP DATABASE IF EXISTS ventas;
CREATE DATABASE ventas CHARACTER SET utf8mb4;
USE ventas;

CREATE TABLE cliente (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  ciudad VARCHAR(100),
  categoría INT UNSIGNED
);

CREATE TABLE comercial (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  comisión FLOAT
);

CREATE TABLE pedido (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  total DOUBLE NOT NULL,
  fecha DATE,
  id_cliente INT UNSIGNED NOT NULL,
  id_comercial INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id),
  FOREIGN KEY (id_comercial) REFERENCES comercial(id)
);

INSERT INTO cliente VALUES(1, 'Aarón', 'Rivero', 'Gómez', 'Almería', 100);
INSERT INTO cliente VALUES(2, 'Adela', 'Salas', 'Díaz', 'Granada', 200);
INSERT INTO cliente VALUES(3, 'Adolfo', 'Rubio', 'Flores', 'Sevilla', NULL);
INSERT INTO cliente VALUES(4, 'Adrián', 'Suárez', NULL, 'Jaén', 300);
INSERT INTO cliente VALUES(5, 'Marcos', 'Loyola', 'Méndez', 'Almería', 200);
INSERT INTO cliente VALUES(6, 'María', 'Santana', 'Moreno', 'Cádiz', 100);
INSERT INTO cliente VALUES(7, 'Pilar', 'Ruiz', NULL, 'Sevilla', 300);
INSERT INTO cliente VALUES(8, 'Pepe', 'Ruiz', 'Santana', 'Huelva', 200);
INSERT INTO cliente VALUES(9, 'Guillermo', 'López', 'Gómez', 'Granada', 225);
INSERT INTO cliente VALUES(10, 'Daniel', 'Santana', 'Loyola', 'Sevilla', 125);

INSERT INTO comercial VALUES(1, 'Daniel', 'Sáez', 'Vega', 0.15);
INSERT INTO comercial VALUES(2, 'Juan', 'Gómez', 'López', 0.13);
INSERT INTO comercial VALUES(3, 'Diego','Flores', 'Salas', 0.11);
INSERT INTO comercial VALUES(4, 'Marta','Herrera', 'Gil', 0.14);
INSERT INTO comercial VALUES(5, 'Antonio','Carretero', 'Ortega', 0.12);
INSERT INTO comercial VALUES(6, 'Manuel','Domínguez', 'Hernández', 0.13);
INSERT INTO comercial VALUES(7, 'Antonio','Vega', 'Hernández', 0.11);
INSERT INTO comercial VALUES(8, 'Alfredo','Ruiz', 'Flores', 0.05);

INSERT INTO pedido VALUES(1, 150.5, '2017-10-05', 5, 2);
INSERT INTO pedido VALUES(2, 270.65, '2016-09-10', 1, 5);
INSERT INTO pedido VALUES(3, 65.26, '2017-10-05', 2, 1);
INSERT INTO pedido VALUES(4, 110.5, '2016-08-17', 8, 3);
INSERT INTO pedido VALUES(5, 948.5, '2017-09-10', 5, 2);
INSERT INTO pedido VALUES(6, 2400.6, '2016-07-27', 7, 1);
INSERT INTO pedido VALUES(7, 5760, '2015-09-10', 2, 1);
INSERT INTO pedido VALUES(8, 1983.43, '2017-10-10', 4, 6);
INSERT INTO pedido VALUES(9, 2480.4, '2016-10-10', 8, 3);
INSERT INTO pedido VALUES(10, 250.45, '2015-06-27', 8, 2);
INSERT INTO pedido VALUES(11, 75.29, '2016-08-17', 3, 7);
INSERT INTO pedido VALUES(12, 3045.6, '2017-04-25', 2, 1);
INSERT INTO pedido VALUES(13, 545.75, '2019-01-25', 6, 1);
INSERT INTO pedido VALUES(14, 145.82, '2017-02-02', 6, 1);
INSERT INTO pedido VALUES(15, 370.85, '2019-03-11', 1, 5);
INSERT INTO pedido VALUES(16, 2389.23, '2019-03-11', 1, 5);



-- 2 INSERT 
-- Nuevos clientes
INSERT INTO cliente (nombre, apellido1, apellido2, ciudad, categoría)
VALUES ('Pedro', 'Vargas', 'LLosa', 'Bogotá', 100);
INSERT INTO cliente (nombre, apellido1, apellido2, ciudad, categoría)
VALUES ('Manuel', 'Miranda', 'Flores', 'Cali', 125);
INSERT INTO cliente (nombre, apellido1, apellido2, ciudad, categoría)
VALUES ('Rocio', 'Duarte', 'Peña', 'Bogotá', 200);
INSERT INTO cliente (nombre, apellido1, apellido2, ciudad, categoría)
VALUES ('Alma', 'Ruiz', 'Prieto', 'Medellín', 100);
INSERT INTO cliente (nombre, apellido1, apellido2, ciudad, categoría)
VALUES ('Angela', 'Alvarez', 'Peña', 'Cali', 200);

-- Nuevos comerciales
INSERT INTO comercial (nombre, apellido1, apellido2, comisión)
VALUES ('Maria', 'Duran', 'Perez', 0.15);
INSERT INTO comercial (nombre, apellido1, apellido2, comisión)
VALUES ('Angel', 'Mancera', 'Diaz', 0.05);
INSERT INTO comercial (nombre, apellido1, apellido2, comisión)
VALUES ('Ana', 'Ferias', 'Flores', 0.17);
INSERT INTO comercial (nombre, apellido1, apellido2, comisión)
VALUES ('Pedro', 'Rojas', 'Llanos', 0.10);
INSERT INTO comercial (nombre, apellido1, apellido2, comisión)
VALUES ('Miguel', 'Granados', 'Alvira', 0.15);

-- Nuevos pedidos
INSERT INTO pedido (total, fecha, id_cliente, id_comercial)
VALUES (138.51, '2020-08-15', (SELECT id FROM cliente WHERE nombre = 'Angela' AND apellido1 = 'Alvarez' AND apellido2 = 'Peña'), (SELECT id FROM comercial WHERE nombre = 'Miguel' AND apellido1 = 'Granados' AND apellido2 = 'Alvira'));
INSERT INTO pedido (total, fecha, id_cliente, id_comercial)
VALUES (1684.25, '2020-11-27', (SELECT id FROM cliente WHERE nombre = 'Alma' AND apellido1 = 'Ruiz' AND apellido2 = 'Prieto'), (SELECT id FROM comercial WHERE nombre = 'Pedro' AND apellido1 = 'Rojas' AND apellido2 = 'Llanos'));
INSERT INTO pedido (total, fecha, id_cliente, id_comercial)
VALUES (345.21, '2020-10-19', (SELECT id FROM cliente WHERE nombre = 'Pedro' AND apellido1 = 'Vargas' AND apellido2 = 'LLosa'), (SELECT id FROM comercial WHERE nombre = 'Maria' AND apellido1 = 'Duran' AND apellido2 = 'Perez'));
INSERT INTO pedido (total, fecha, id_cliente, id_comercial)
VALUES (78.69, '2020-03-11', (SELECT id FROM cliente WHERE nombre = 'Manuel' AND apellido1 = 'Miranda' AND apellido2 = 'Flores'), (SELECT id FROM comercial WHERE nombre = 'Angel' AND apellido1 = 'Mancera' AND apellido2 = 'Diaz'));
INSERT INTO pedido (total, fecha, id_cliente, id_comercial)
VALUES (89.27, '2020-07-07', (SELECT id FROM cliente WHERE nombre = 'Manuel' AND apellido1 = 'Miranda' AND apellido2 = 'Flores'), (SELECT id FROM comercial WHERE nombre = 'Miguel' AND apellido1 = 'Granados' AND apellido2 = 'Alvira'));

-- 3 SELECT 
-- 1
select * from pedido p order by p.fecha DESC ;
-- 2
select * from pedido p order by p.total DESC limit 2;
-- 3
SELECT * from comercial c order by c.comisión DESC limit 1;
SELECT MAX(comisión) AS comisión_mayor FROM comercial;
-- 4
SELECT * FROM cliente c where c.nombre NOT LIKE "A%" ORDER by c.nombre ; 
-- 5
SELECT p.id,p.total,p.fecha,c.nombre,p.id_comercial  FROM cliente c , pedido p WHERE c.id =p.id_cliente ORDER BY c.nombre ; 
-- 6
SELECT p.id,p.total,p.fecha,c.nombre as "Cliente",co.nombre as "Comercial"  FROM cliente c , pedido p, comercial co WHERE c.id =p.id_cliente and c.id = co.id ; 
-- 7
SELECT *
FROM cliente
WHERE id NOT IN (SELECT id_cliente FROM pedido)
ORDER BY apellido1, apellido2;

-- 8
SELECT *
FROM comercial
WHERE id NOT IN (SELECT id_comercial FROM pedido)
ORDER BY apellido1, apellido2;

-- 9
SELECT AVG(total) AS media_pedidos
FROM pedido;

-- 10
SELECT COUNT(*) AS total_clientes
FROM cliente;

-- 11
SELECT MAX(total) AS mayor_cantidad
FROM pedido;

-- 12
SELECT c.id, c.nombre, c.apellido1, c.apellido2, COUNT(p.id) AS total_pedidos
FROM cliente c
LEFT JOIN pedido p ON c.id = p.id_cliente
WHERE YEAR(p.fecha) = 2017
GROUP BY c.id, c.nombre, c.apellido1, c.apellido2
ORDER BY total_pedidos DESC;

-- 13
SELECT c.*, p.*
FROM cliente c
JOIN pedido p ON c.id = p.id_cliente
WHERE YEAR(p.fecha) = 2017
AND p.total >= (SELECT AVG(total) FROM pedido WHERE YEAR(fecha) = 2017)
ORDER BY p.fecha DESC;

-- 14
SELECT COUNT(*) AS total_pedidos
FROM pedido
WHERE id_comercial = (SELECT id FROM comercial WHERE nombre = 'Daniel' AND apellido1 = 'Sáez' AND apellido2 = 'Vega');

-- 15
SELECT *
FROM cliente
WHERE id = ANY (SELECT id_cliente FROM pedido)
ORDER BY apellido1, apellido2;

-- 4 UPDATE 

-- 1
UPDATE cliente
SET ciudad = 'Sevilla'
WHERE nombre = 'Pedro' AND apellido1 = 'Vargas' AND apellido2 = 'LLosa';

-- 2
UPDATE cliente
SET ciudad = 'Medellín'
WHERE nombre = 'Daniel' AND apellido1 = 'Santan' AND apellido2 = 'Loyal';

-- 3
UPDATE cliente
SET ciudad = 'Cali'
WHERE nombre = 'Maria' AND apellido1 = 'Santan' AND apellido2 = 'Moreno';

-- 4

UPDATE cliente
SET categoría = 150, ciudad = 'Granada'
WHERE nombre = 'Alma' AND apellido1 = 'Ruiz' AND apellido2 = 'Prieto';

-- 5
UPDATE comercial
SET comisión = 0.21
WHERE nombre = 'Ana' AND apellido1 = 'Ferias' AND apellido2 = 'Flores';

-- 6
UPDATE comercial
SET comisión = 0.15
WHERE nombre = 'Diego' AND apellido1 = 'Flores' AND apellido2 = 'Salas';

-- 5 DELETE  

-- 1
DELETE FROM pedido
WHERE fecha = '2017-10-05';

-- 2

DELETE FROM pedido
WHERE id_cliente = (
  SELECT id
  FROM cliente
  WHERE nombre = 'Pilar' AND apellido1 = 'Ruiz'
);

DELETE FROM cliente
WHERE nombre = 'Pilar' AND apellido1 = 'Ruiz';

-- 3
DELETE FROM comercial
WHERE apellido1 = 'Hernandez';

-- 4
DELETE FROM cliente
WHERE ciudad = 'Bogotá';
