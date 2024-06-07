document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        const response = await axios.post('http://localhost:8080/signup', {
            email: email,
            username: username,
            password: password
        });

        if (response.status === 200) {
            alert('User created successfully!');
        } else {
            alert(`Error: ${response.data}`);
        }
    } catch (error) {
        if (error.response) {
            alert(`Error: ${error.response.data}`);
        } else if (error.request) {
            alert('Error: No response from server');
        } else {
            alert(`Error: ${error.message}`);
        }
    }
});

function togglePassword(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
