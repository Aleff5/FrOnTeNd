document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await axios.post('http://localhost:8080/login', {
            email: email,
            password: password
        });

        if (response.status === 200) {
            alert(response.data);
        } else {
            alert(`Error: ${response.data}`);
        }
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            alert(`Error: ${error.response.data}`);
        } else if (error.request) {
            // Request was made but no response received
            alert('Error: No response from server');
        } else {
            // Something else happened while setting up the request
            alert(`Error: ${error.message}`);
        }
    }
});

function togglePassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
