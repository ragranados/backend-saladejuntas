DROP DATABASE saladejuntas;
CREATE DATABASE saladejuntas;

USE saladejuntas;

INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Cerveza", "2017-06-15", "2017-06-15");
INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Boquitas", "2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Nacional Pequeña", 1,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Extranjera", 1,"2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Platos", 2,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Individuales", 2,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Pilsener", "Cerveza Pilsener Pequeña",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Suprema", "Cerveza Suprema",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Golden", "Cerveza Golden",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Budlight", "Cerveza Budlight Normal",true,2,2.5,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Plato Grande", "Plato Grande bocas",false,3,20,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Plato Normal", "Plato Pequeño bocas",false,3,10,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Chicharrones", "Chicharrones",false,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Papas fritas", "Papas fritas",false ,4,1.75,"2017-06-15", "2017-06-15");

INSERT INTO metodoPago(nombre,createdAt, updatedAt) VALUES ("Efectivo","2017-06-15", "2017-06-15");
INSERT INTO metodoPago(nombre,createdAt, updatedAt) VALUES ("Tarjeta","2017-06-15", "2017-06-15");
INSERT INTO metodoPago(nombre,createdAt, updatedAt) VALUES ("Hibrido","2017-06-15", "2017-06-15");

INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");

INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Activa","2017-06-15", "2017-06-15");
INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Pre-cerrada","2017-06-15", "2017-06-15");
INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Cerrada","2017-06-15", "2017-06-15");

#SET GLOBAL time_zone = '-6:00';
#SET time_zone = '-06:00';

SELECT * FROM category;
SELECT * FROM subCategory;
SELECT * FROM product;
SELECT * FROM metodoPago;
SELECT * FROM mesa;
SELECT * FROM bill;
SELECT * FROM subBill;
SELECT * FROM subbillItem;
SELECT * FROM orderStatus;
