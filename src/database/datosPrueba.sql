DROP DATABASE saladejuntas;
CREATE DATABASE saladejuntas;

USE saladejuntas;

INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Cerveza", "2017-06-15", "2017-06-15");
INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Boquitas", "2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Nacional Pequeña", 1,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Extranjera", 1,"2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Platos", 2,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,subCategoryId,precio,createdAt, updatedAt) VALUES ("Pilsener", "Cerveza Pilsener Pequeña",1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,subCategoryId,precio,createdAt, updatedAt) VALUES ("Suprema", "Cerveza Suprema",1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,subCategoryId,precio,createdAt, updatedAt) VALUES ("Golden", "Cerveza Golden",1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,subCategoryId,precio,createdAt, updatedAt) VALUES ("Budlight", "Cerveza Budlight Normal",2,2.5,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,subCategoryId,precio,createdAt, updatedAt) VALUES ("Plato Grande", "Plato Grande boquitas",3,20,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,subCategoryId,precio,createdAt, updatedAt) VALUES ("Plato Normal", "Plato Pequeño Boquitas" ,3,10,"2017-06-15", "2017-06-15");

INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");

SELECT * FROM category;
SELECT * FROM subCategory;
SELECT * FROM product;
SELECT * FROM mesa;
