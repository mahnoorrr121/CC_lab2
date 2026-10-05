const button = document.getElementById("loadUsers");
const usersContainer = document.getElementById("users");

button.addEventListener("click", async () => {
    usersContainer.innerHTML = '<div class="loading-placeholder"><p>⏳ Loading team members...</p></div>';
    button.disabled = true;
    button.textContent = "👥 Loading...";

    try {
        const response = await fetch("/.netlify/functions/users");

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const users = await response.json();
        usersContainer.innerHTML = "";

        if (users.length === 0) {
            usersContainer.innerHTML = '<div class="loading-placeholder"><p>No team members found</p></div>';
            return;
        }

        users.forEach((user, index) => {
            const userDiv = document.createElement("div");
            userDiv.className = "user";
            
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>📧 Email:</strong> ${user.email}</p>
                <p><strong>🎂 Age:</strong> ${user.age} years old</p>
            `;

            // Add staggered animation
            userDiv.style.animation = `fadeIn 0.6s ease-out ${index * 0.1}s both`;
            usersContainer.appendChild(userDiv);
        });

    } catch (error) {
        console.error(error);
        usersContainer.innerHTML = `
            <div class="loading-placeholder" style="grid-column: 1/-1; color: #ef4444;">
                <p>❌ Could not connect to the backend.</p>
                <p style="font-size: 14px; margin-top: 10px;">Please try again later.</p>
            </div>
        `;
    } finally {
        button.disabled = false;
        button.textContent = "👥 Load Team Members";
    }
});
