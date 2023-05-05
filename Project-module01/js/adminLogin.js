const form = document.querySelector('form');
const errorMessage = document.querySelector('#error-message');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password";
    } else if (username === "admin" && password === "admin") {
        window.location.href = "admin.html";
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});