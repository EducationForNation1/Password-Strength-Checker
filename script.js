document.getElementById("passwordInput").addEventListener("input", function() {
    let password = this.value;
    let strengthBar = document.getElementById("strength-bar");
    let strengthText = document.getElementById("strength-text");

    let strength = 0;

    if (password.length >= 8) strength++; // Length Check
    if (password.match(/[A-Z]/)) strength++; // Uppercase Check
    if (password.match(/[0-9]/)) strength++; // Number Check
    if (password.match(/[^a-zA-Z0-9]/)) strength++; // Special Character Check

    // Adjust the strength bar based on password strength
    let strengthLevels = ["Weak", "Medium", "Strong", "Very Strong"];
    let strengthColors = ["red", "orange", "blue", "green"];
    
    strengthBar.style.width = (strength * 25) + "%";
    strengthBar.style.background = strengthColors[strength - 1] || "red";
    strengthText.textContent = password.length === 0 ? "Enter a password" : strengthLevels[strength - 1] || "Weak";
});
