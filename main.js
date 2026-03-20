// Basic logic for handling form submission and input states

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const loginBtn = document.getElementById('login-button');
    const inputs = loginForm.querySelectorAll('input');

    // Handle form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username && password) {
            loginBtn.textContent = 'Logging In...';
            loginBtn.disabled = true;
            loginBtn.style.opacity = '0.7';

            // Simulate login delay
            setTimeout(() => {
                alert('This is a faithful recreation of the Roblox login page. Actual login functionality is not connected to a backend.');
                loginBtn.textContent = 'Log In';
                loginBtn.disabled = false;
                loginBtn.style.opacity = '1';
            }, 1000);
        }
    });

    // Simple interaction effects
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.01)';
            input.parentElement.style.transition = 'transform 0.2s ease';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });

    // Log the page version for debugging
    console.log('Roblox Login Page Remake v1.0 initialized');
});
