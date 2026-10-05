const button = document.getElementById("loadUsers");
const usersContainer = document.getElementById("users");

button.addEventListener("click", async () => {

    usersContainer.innerHTML = "<p>Loading...</p>";

    try {

        const response = await fetch("/.netlify/functions/users");

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const users = await response.json();

        usersContainer.innerHTML = "";

        users.forEach(user => {

            const userDiv = document.createElement("div");

            userDiv.className = "user";

            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>Email: ${user.email}</p>
                <p>Age: ${user.age}</p>
            `;

            usersContainer.appendChild(userDiv);
        });

    } catch (error) {

        console.error(error);

        usersContainer.innerHTML =
            "<p>Could not connect to the backend.</p>";
    }

});
