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
('mahnoor', 'mahnoor@example.com', 22),
('eman', 'eman@example.com', 25),
('tooba', 'tooba@example.com', 28),
('hamna', 'hamna@example.com', 21);

SELECT * FROM users;

