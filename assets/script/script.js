
const form = document.getElementById('registrationForm');
const inputs = {
	username: document.getElementById('username'),
	email: document.getElementById('email'),
	phone: document.getElementById('phone'),
	password: document.getElementById('password'),
	confirmPassword: document.getElementById('confirmPassword')
};

// Validation functions
const validateUsername = () => {
	const username = inputs.username.value.trim();
	if (username.length < 4) {
		showError(inputs.username, 'usernameError', 'Username must be at least 4 characters');
		return false;
	}
	showSuccess(inputs.username);
	return true;
};

const validateEmail = () => {
	const email = inputs.email.value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		showError(inputs.email, 'emailError', 'Please enter a valid email');
		return false;
	}
	showSuccess(inputs.email);
	return true;
};

const validatePhone = () => {
	const phone = inputs.phone.value.trim();
	const phoneRegex = /^\d{10}$/;
	if (!phoneRegex.test(phone)) {
		showError(inputs.phone, 'phoneError', 'Invalid phone number');
		return false;
	}
	showSuccess(inputs.phone);
	return true;
};

const validatePassword = () => {
	const password = inputs.password.value;
	const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (!passwordRegex.test(password)) {
		showError(inputs.password, 'passwordError', 
			'Password must contain: 8+ characters, 1 uppercase, 1 number, 1 special character');
		return false;
	}
	showSuccess(inputs.password);
	return true;
};

const validateConfirmPassword = () => {
	const confirmPassword = inputs.confirmPassword.value;
	if (confirmPassword !== inputs.password.value) {
		showError(inputs.confirmPassword, 'confirmPasswordError', 'Passwords do not match');
		return false;
	}
	showSuccess(inputs.confirmPassword);
	return true;
};

// Helper functions
const showError = (input, errorId, message) => {
	const errorElement = document.getElementById(errorId);
	input.parentElement.classList.add('error');
	input.parentElement.classList.remove('success');
	errorElement.textContent = message;
	errorElement.style.display = 'block';
};

const showSuccess = (input) => {
	input.parentElement.classList.remove('error');
	input.parentElement.classList.add('success');
	document.getElementById(`${input.id}Error`).style.display = 'none';
};

// Event listeners
Object.values(inputs).forEach(input => {
	input.addEventListener('input', () => {
		switch(input.id) {
			case 'username': validateUsername(); break;
			case 'email': validateEmail(); break;
			case 'phone': validatePhone(); break;
			case 'password': validatePassword(); break;
			case 'confirmPassword': validateConfirmPassword(); break;
		}
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const isUsernameValid = validateUsername();
	const isEmailValid = validateEmail();
	const isPhoneValid = validatePhone();
	const isPasswordValid = validatePassword();
	const isConfirmPasswordValid = validateConfirmPassword();
	const isGenderSelected = document.querySelector('input[name="gender"]:checked');

	if (!isGenderSelected) {
		alert('Please select your gender');
		return;
	}

	if (isUsernameValid && isEmailValid && isPhoneValid && 
		isPasswordValid && isConfirmPasswordValid) {
		// Submit form
		alert('Registration successful!');
		window.location="../../login.html";
		form.reset();
		Object.values(inputs).forEach(input => 
			input.parentElement.classList.remove('success'));
	}
});
