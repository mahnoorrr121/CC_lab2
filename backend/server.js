const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});


// Get all users
app.get("/api/users", async (req, res) => {

    try {

        const [users] = await pool.query(
            "SELECT id, name, email, age, created_at FROM users"
        );

        res.json(users);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to get users"
        });

    }
});


// Get one user
app.get("/api/users/:id", async (req, res) => {

    try {

        const { id } = req.params;

        const [users] = await pool.query(
            "SELECT id, name, email, age, created_at FROM users WHERE id = ?",
            [id]
        );

        if (users.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(users[0]);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to get user"
        });

    }
});


// Add a new user
app.post("/api/users", async (req, res) => {

    try {

        const { name, email, age } = req.body;

        if (!name || !email || !age) {
            return res.status(400).json({
                message: "Name, email and age are required"
            });
        }

        const [result] = await pool.query(
            "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
            [name, email, age]
        );

        res.status(201).json({
            message: "User created successfully",
            userId: result.insertId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to create user"
        });

    }
});


// Start server
app.listen(PORT, () => {

    console.log(`Backend running at http://localhost:${PORT}`);

});
