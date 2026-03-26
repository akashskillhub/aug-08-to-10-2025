-- table note
-- id task desc priority complete
-- CRUD

-- CREATE TABLE note (
--     id INT,
--     task VARCHAR(255),
--     description VARCHAR(255),
--     priority VARCHAR(255),
--     complete BOOLEAN
-- );

-- INSERT INTO note 
-- VALUES
--     (1, 'learn html', 'fake desc','low',FALSE),
--     (2, 'learn css', 'fake desc','low',FALSE),
--     (3, 'learn js', 'fake desc','high',FALSE),
--     (4, 'learn react', 'fake desc','high',FALSE),
--     (5, 'learn node', 'fake desc','high',FALSE);

-- UPDATE note SET complete=TRUE WHERE id=3;
-- DELETE FROM note WHERE id=1;

-- SELECT task, priority from note;
SELECT * FROM note WHERE priority='high' AND complete=TRUE; 