-- DROP DATABASE saladejuntas_test;
-- CREATE DATABASE saladejuntas_test;

USE saladejuntas;

INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Cerveza", "2017-06-15", "2017-06-15");
INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Boquitas", "2017-06-15", "2017-06-15");
INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Platos fuertes", "2017-06-15", "2017-06-15");
INSERT INTO category(nombre, createdAt, updatedAt) VALUES ("Bebidas", "2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Nacional Pequeña", 1,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Extranjera", 1,"2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Platos", 2,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Individuales", 2,"2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Platos fuertes", 3,"2017-06-15", "2017-06-15");
INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Sin Alcohol", 4,"2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Combos", 1,"2017-06-15", "2017-06-15");

INSERT INTO subCategory(nombre, categoryId,createdAt, updatedAt) VALUES ("Nacional Chola", 1,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Pilsener", "Cerveza Pilsener Pequeña",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Regia Lata", "Regia Lata",true,1,0.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Suprema", "Cerveza Suprema",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Golden", "Cerveza Golden",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Golden Extra", "Cerveza Extra",true,1,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Regia Chola", "Regia (Chola)",true,8,3,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Pilsener Chola", "Pilsener (Chola)",true,8,3,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Michelob Ultra", "Michelob Ultra",true,2,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Corona", "Corona",true,2,1.85,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Modelo", "Modelo",true,2,1.95,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Stella Artois", "Stella Artois",true,2,1.95,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Smirnoff Ice", "Smirnoff Ice",true,2,2.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Heineken", "Heineken",true,2,2.5,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Plato Grande", "Plato Grande bocas",false,3,25,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Plato Normal", "Plato Pequeño bocas",false,3,15,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Chicharrones", "Chicharrones",false,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Papas fritas", "Papas fritas",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Chunks", "Chunks",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Papas Gajo", "Papas gajo",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Chorizos", "Chorizos",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Costilla de cerdo", "Costilla de cerdo",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Costilla de res", "Costilla de res",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Alitas", "Alitas",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Aros de cebolla", "Aros de cebolla",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Queso frito", "Queso frito",false ,4,1.75,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Salchipapa", "Salchipapa",false ,4,1.75,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Chicharrones", "Plato Fuerte Chicharrones",false ,5,6.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Costillas", "Plato Fuerte Costillas",false ,5,6.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Alitas", "Plato Fuerte Alitas",false ,5,6.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Chunks", "Plato Fuerte Chunks",false ,5,6.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Salchipapa", "Plato Fuerte Salchipapa",false ,5,6.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Carne", "Plato De carne",false ,5,8.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Pollo", "Plato De pollo",false ,5,7.99,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Gaseosa", "Gaseosa",false ,6,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Agua", "Botella de Agua",false ,6,1.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Cafe", "Taza de Cafe",false ,6,1,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Agua Mineral", "Agua Mineral",false ,6,1.5,"2017-06-15", "2017-06-15");

INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Balde de 6", "Blade de 6",false ,7,7.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Balde de 6 Stella", "Balde de 6 Stella",false ,7,10.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Blade de 8", "Blade de 8",false ,7,9.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Balde cholas", "Balde cholas",false ,7,7.5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Hielerazo", "Hielerazo",false ,7,29.99,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Promo Chola", "Promo Chola",false ,7,5,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Promo Nacional + boca", "Promo Nacional + boca",false ,7,3,"2017-06-15", "2017-06-15");
INSERT INTO product(nombre,nombreEnFactura,esBebida,subCategoryId,precio,createdAt, updatedAt) VALUES ("Promo 3 coronas", "Promo 3 coronas",false ,7,5,"2017-06-15", "2017-06-15");

INSERT INTO metodoPago(nombre,codigo,createdAt, updatedAt) VALUES ("Efectivo","E","2017-06-15", "2017-06-15");
INSERT INTO metodoPago(nombre,codigo,createdAt, updatedAt) VALUES ("Tarjeta","T","2017-06-15", "2017-06-15");
INSERT INTO metodoPago(nombre,codigo,createdAt, updatedAt) VALUES ("Hibrido","H","2017-06-15", "2017-06-15");

INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");
INSERT INTO mesa(libre,createdAt, updatedAt) VALUES (true,"2017-06-15", "2017-06-15");

INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Activa","2017-06-15", "2017-06-15");
INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Pre-cerrada","2017-06-15", "2017-06-15");
INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Cerrada","2017-06-15", "2017-06-15");
INSERT INTO orderStatus(nombre,createdAt, updatedAt) VALUES ("Anulada","2017-06-15", "2017-06-15");


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