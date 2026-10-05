CREATE DATABASE sample_website;

USE sample_website;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    age INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, age)
VALUES
('Ali Khan', 'ali@example.com', 22),
('Sara Ahmed', 'sara@example.com', 25),
('Ahmed Raza', 'ahmed@example.com', 28),
('mahNoor', 'mahnoor@example.com', 21);

SELECT * FROM users;

