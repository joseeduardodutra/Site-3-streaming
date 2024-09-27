// Salva o plano escolhido no localStorage
function choosePlan(plan) {
    localStorage.setItem("selectedPlan", plan);
    window.location.href = "signup.html";
}

// Preenche automaticamente o campo do plano no formulário de cadastro
window.onload = function() {
    const planField = document.getElementById("plan");
    if (planField) {
        planField.value = localStorage.getItem("selectedPlan");
    }
};

// Valida o formulário de cadastro
function validateSignupForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
        return false;
    } else {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}

// Valida o formulário de login
function validateLoginForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login realizado com sucesso!");
        window.location.href = "stream.html";
        return false;
    } else {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}
