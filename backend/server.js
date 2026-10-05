const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const users = [
    {
        id: 1,
        name: "Ali Khan",
        email: "ali@example.com",
        age: 22
    },
    {
        id: 2,
        name: "Sara Ahmed",
        email: "sara@example.com",
        age: 25
    },
    {
        id: 3,
        name: "Ahmed Raza",
        email: "ahmed@example.com",
        age: 28
    },
    {
        id: 4,
        name: "Fatima Noor",
        email: "fatima@example.com",
        age: 21
    }
];

app.get("/", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.get("/api/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
