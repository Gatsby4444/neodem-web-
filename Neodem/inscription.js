const form = document.getElementById("registerForm");

const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function showError(input, message) {
  input.style.borderColor = "red";
  let error = input.nextElementSibling;
  if (!error || !error.classList.contains("error")) {
    error = document.createElement("div");
    error.classList.add("error");
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.style.marginTop = "4px";
    input.insertAdjacentElement("afterend", error);
  }
  error.textContent = message;
}

function clearError(input) {
  input.style.borderColor = "green";
  let error = input.nextElementSibling;
  if (error && error.classList.contains("error")) {
    error.textContent = "";
  }
}

// Vérification email
email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    showError(email, "Email invalide");
  } else {
    clearError(email);
  }
});

// Vérification username
username.addEventListener("input", () => {
  if (username.value.length < 3) {
    showError(username, "Nom d'utilisateur trop court (min. 3 caractères)");
  } else {
    clearError(username);
  }
});

// Vérification password
password.addEventListener("input", () => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/; 
  // min 6 caractères, 1 majuscule, 1 chiffre
  if (!regex.test(password.value)) {
    showError(password, "Min. 6 caractères, 1 majuscule et 1 chiffre");
  } else {
    clearError(password);
  }
});

// Vérification confirmation
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Les mots de passe ne correspondent pas");
  } else {
    clearError(confirmPassword);
  }
});

// Soumission du formulaire
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const errors = document.querySelectorAll(".error");
  let hasError = false;

  errors.forEach(error => {
    if (error.textContent !== "") {
      hasError = true;
    }
  });

  if (hasError) {
    alert("Veuillez corriger les erreurs avant de continuer.");
    return;
  }

  alert("✅ Inscription réussie (simulation) !");
  // Ici tu pourras plus tard envoyer les données vers Flask
});
