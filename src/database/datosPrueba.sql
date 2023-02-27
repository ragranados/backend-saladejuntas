DROP DATABASE saladejuntas;
CREATE DATABASE saladejuntas;

USE saladejuntas;

INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Cerveza", "2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Nacional Pequeña", 1,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Extranjera", 1,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,subCategoryId,precio,createdAt, updatedAt) VALUES ("Pilsener", 1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,subCategoryId,precio,createdAt, updatedAt) VALUES ("Suprema", 1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,subCategoryId,precio,createdAt, updatedAt) VALUES ("Golden", 1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,subCategoryId,precio,createdAt, updatedAt) VALUES ("Budlight", 2,2.5,"2017-06-15", "2017-06-15");

INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");

SELECT * FROM category;
SELECT * FROM subCategory;
SELECT * FROM product;
SELECT * FROM mesa;
