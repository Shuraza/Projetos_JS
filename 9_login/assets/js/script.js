const modal = document.getElementById("loginModal");
const btn = document.getElementById("openModal");
const span = document.getElementById("closeModal");
const form = document.getElementById("loginForm");
const errorDiv = document.getElementById("error");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

form.onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        errorDiv.textContent = "Por favor, preencha todos os campos.";
    } else {
        errorDiv.textContent = "";
        alert("Login realizado com sucesso!");
        modal.style.display = "none";
    }
}
