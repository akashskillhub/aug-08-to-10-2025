-- SELECT datname from pg_database;
-- DROP DATABASE store;

-- CREATE DATABASE taskmanager;

-- CREATE TABLE users(
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL, 
--     email VARCHAR(255) NOT NULL UNIQUE, 
--     password VARCHAR(255) NOT NULL
-- );

-- INSERT INTO users (name, email, password) 
-- VALUES 
-- ('John Doe', 'john@gmail.com','123'),
-- ('Ross Doe', 'ross@gmail.com','123'),
-- ('Kate Doe', 'kate@gmail.com','123');

-- SELECT * FROM users;

-- ALTER TABLE users ADD COLUMN phone VARCHAR(255);
-- ALTER TABLE users RENAME phone TO mobile; 
-- ALTER TABLE users DROP COLUMN mobile;
-- ALTER TABLE users RENAME TO emp; 
-- SELECT * from emp;

-- CREATE TABLE todos (
--     id SERIAL PRIMARY KEY,
--     task VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     priority VARCHAR(255) NOT NULL,
--     isComplete BOOLEAN DEFAULT FALSE,
--     user_id INT,
--     FOREIGN KEY (user_id) REFERENCES emp(id) 
-- );

-- INSERT INTO todos (task, description, priority, user_id) 
-- VALUES 
-- ('learn sql','sql is fun','very high',1),
-- ('learn postgresql','postgresql is fun','very high',1),
-- ('learn nextjs','next js is fast','very high',2);

-- SELECT * from emp INNER JOIN todos ON emp.id = todos.user_id;

-- INSERT INTO todos (task, description, priority) 
-- VALUES ('fake','fake desc','very low');

-- SELECT * from todos;