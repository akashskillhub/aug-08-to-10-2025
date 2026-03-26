-- SELECT current_database();
-- SELECT datname FROM pg_database;
-- CREATE DATABASE test;
-- SELECT datname FROM pg_database;
-- DROP DATABASE test;

-- CREATE DATABASE todo;

-- CREATE TABLE note (id INT, task VARCHAR(255), description VARCHAR(255), priority VARCHAR(255), complete BOOLEAN);

-- SELECT * FROM note;
-- INSERT INTO note VALUES(1, 'learn sql', 'sql is awesome', 'very high', FALSE);

-- INSERT INTO note VALUES
--     (2, 'learn data engineering', 'DE is popular', 'very high', FALSE),
--     (3, 'learn React native', 'RN is popular', 'high', FALSE),
--     (4, 'learn Python', 'Python is awesome', 'high', FALSE);


-- UPDATE note SET complete=TRUE,priority='high' WHERE id=1;
-- SELECT * FROM note;
-- DELETE FROM note WHERE id=2;