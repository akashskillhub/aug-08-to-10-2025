-- CREATE DATABASE store;
-- contraints (rule)


-- SERIAL           =>  INT AUTO INCREEMENT
-- PRIMARY KEY      =>  NOT NULL UNIQUE
-- NOT NULL         =>  REQUIRED

-- CREATE TABLE product (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL UNIQUE,
--     brand VARCHAR(50) NOT NULL,
--     category VARCHAR(50) NOT NULL,
--     price INT NOT NULL,
--     stock INT NOT NULL,
--     publish BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO product 
--     (name, brand, category,price, stock)
--  VALUES
--     ('iphone', 'apple','mobile',95000, 10);

-- SELECT * FROM product;
-- DROP TABLE product;
-- DELETE FROM product;


-- INSERT INTO product (name, brand, category,price, stock, publish) 
-- VALUES
-- ('iPhone 15', 'Apple', 'Mobile', 80000, 10, true),
-- ('Galaxy S23', 'Samsung', 'Mobile', 70000, 15, true),
-- ('MacBook Air', 'Apple', 'Laptop', 120000, 5, true),
-- ('Dell XPS', 'Dell', 'Laptop', 90000, 8, false),
-- ('Boat Headphones', 'Boat', 'Accessories', 2000, 50, true);


-- SELECT * FROM product LIMIT 2;
-- SELECT * FROM product LIMIT 2 OFFSET 1;
-- SELECT * FROM product ORDER BY stock;
-- SELECT * FROM product ORDER BY price ASC;

-- AGGRAGATION FUNCTIONS

-- SELECT COUNT(*) from product;
-- SELECT SUM(stock) from product;
-- SELECT MIN(stock) from product;
-- SELECT MAX(stock) from product;
-- SELECT AVG(stock) from product;

-- having
-- groupby
-- joins
-- forighn keys
-- drizzle