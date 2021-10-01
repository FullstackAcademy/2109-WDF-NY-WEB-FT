DROP TABLE IF EXISTS students;

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name character varying(100) NOT NULL,
  house character varying(100) NOT NULL
);

INSERT INTO students (name, house) VALUES
('Harry Potter', 'Gryffindor'),
('Ron Weasley', 'Gryffindor'),
('Hermione Granger', 'Gryffindor'),
('Luna Lovegood', 'Ravenclaw'),
('Cedric Diggory', 'Hufflepuff'),
('Draco Malfoy', 'Slytherin');
