function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('passwordStrength');
    const passwordError = document.getElementById('passwordError');

    const weakRegex = /^.{6,}$/; 
    const mediumRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;  
    const strongRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/;  

    if (strongRegex.test(password)) {
        strengthIndicator.textContent = 'Strong Password';
        strengthIndicator.className = 'strength-indicator strong';
        passwordError.textContent = '';  
    } else if (mediumRegex.test(password)) {
        strengthIndicator.textContent = 'Medium Password';
        strengthIndicator.className = 'strength-indicator medium';
        passwordError.textContent = '';  
    } else if (weakRegex.test(password)) {
        strengthIndicator.textContent = 'Weak Password';
        strengthIndicator.className = 'strength-indicator weak';
        passwordError.textContent = '';  
    } else {
        strengthIndicator.textContent = '';
        strengthIndicator.className = 'strength-indicator';
        passwordError.textContent = 'Password must be at least 6 characters.';
    }
}