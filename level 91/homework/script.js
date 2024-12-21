document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
});

function validateFullName() {
    const nameField = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    const regex = /^[A-Za-z ]{3,}$/; 
    
    if (regex.test(nameField.value)) {
        nameField.classList.remove('red');
        nameField.classList.add('green');
        nameError.textContent = ''; 
    } else {
        nameField.classList.remove('green');
        nameField.classList.add('red');
        nameError.textContent = 'Full name must be at least 3 characters and contain only letters.';
    }
    enableSubmitButton();
}

function validateEmail() {
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    
    if (regex.test(emailField.value)) {
        emailField.classList.remove('red');
        emailField.classList.add('green');
        emailError.textContent = ''; 
    } else {
        emailField.classList.remove('green');
        emailField.classList.add('red');
        emailError.textContent = 'Please enter a valid email address.';
    }
    enableSubmitButton();
}

function validatePassword() {
    const passwordField = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    
    if (regex.test(passwordField.value)) {
        passwordField.classList.remove('red');
        passwordField.classList.add('green');
        passwordError.textContent = ''; 
    } else {
        passwordField.classList.remove('green');
        passwordField.classList.add('red');
        passwordError.textContent = 'Password must be at least 8 characters, contain one uppercase letter, one number, and one special character.';
    }
    enableSubmitButton();
}

function validatePasswordConfirm() {
    const passwordField = document.getElementById('password');
    const passwordConfirmField = document.getElementById('passwordConfirm');
    const passwordConfirmError = document.getElementById('passwordConfirmError');
    
    if (passwordField.value === passwordConfirmField.value && passwordConfirmField.value !== '') {
        passwordConfirmField.classList.remove('red');
        passwordConfirmField.classList.add('green');
        passwordConfirmError.textContent = ''; 
    } else {
        passwordConfirmField.classList.remove('green');
        passwordConfirmField.classList.add('red');
        passwordConfirmError.textContent = 'Passwords do not match.';
    }
    enableSubmitButton();
}

function validateAge() {
    const ageField = document.getElementById('age');
    const ageError = document.getElementById('ageError');
    
    if (ageField.value >= 18) {
        ageField.classList.remove('red');
        ageField.classList.add('green');
        ageError.textContent = '';
    } else {
        ageField.classList.remove('green');
        ageField.classList.add('red');
        ageError.textContent = 'You must be at least 18 years old.';
    }
    enableSubmitButton();
}

function enableSubmitButton() {
    const submitButton = document.getElementById('submitButton');
    const nameField = document.getElementById('fullName');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const passwordConfirmField = document.getElementById('passwordConfirm');
    const ageField = document.getElementById('age');
    
    if (
        nameField.classList.contains('green') &&
        emailField.classList.contains('green') &&
        passwordField.classList.contains('green') &&
        passwordConfirmField.classList.contains('green') &&
        ageField.classList.contains('green')
    ) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

document.getElementById('fullName').addEventListener('keyup', validateFullName);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('password').addEventListener('keyup', validatePassword);
document.getElementById('passwordConfirm').addEventListener('keyup', validatePasswordConfirm);
document.getElementById('age').addEventListener('keyup', validateAge);