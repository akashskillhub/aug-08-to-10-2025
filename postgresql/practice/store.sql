-- CREATE DATABASE store_db;
-- SELECT datname from pg_database;

-- CREATE TABLE product (
--     id INT,
--     name VARCHAR(50),
--     brand VARCHAR(50),
--     category VARCHAR(50),
--     price INT,
--     stock INT,
--     publish BOOLEAN
-- );

-- INSERT INTO product 
-- VALUES
-- (1,'iPhone 15', 'Apple', 'Mobile', 80000, 10, true),
-- (2,'Galaxy S23', 'Samsung', 'Mobile', 70000, 15, true),
-- (3,'MacBook Air', 'Apple', 'Laptop', 120000, 5, true),
-- (4,'Dell XPS', 'Dell', 'Laptop', 90000, 8, false),
-- (5,'Boat Headphones', 'Boat', 'Accessories', 2000, 50, true);

-- SELECT * from product;
-- SELECT * from product WHERE publish=TRUE;
-- SELECT * from product WHERE price > 50000;
-- SELECT * from product WHERE category='Mobile';
-- SELECT * from product WHERE stock < 10;
-- SELECT * from product WHERE brand='Apple';
-- SELECT * from product WHERE price >= 2000 AND price <= 80000;
-- SELECT * from product WHERE category='Mobile' AND price <= 75000;
-- SELECT * from product WHERE brand='Apple' OR brand='Dell';
-- UPDATE product SET price=500 WHERE id=1;
-- SELECT * FROM product;
-- UPDATE product SET stock=500 WHERE brand='Dell';
-- DELETE FROM product WHERE publish=FALSE;
-- DELETE FROM product WHERE name='Dell XPS';

DROP DATABASE store_db;
