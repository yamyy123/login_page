document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frontform');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-pass').value;
    
        // Create a user object to send in the request
        const user = {
            username: username,
            email: email,
            password: password
        };
    
        // Make a POST request to the signup endpoint
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            if (data.error) {
                alert(data.error);
            } else if (data.data) {
                console.log('Signup successful:', data);
                alert('Signup successful!');
            } 
        })
        .catch(error => {
            console.error('Error during signup:', error);
            alert('Error during signup. Please try again.');
        });
    
        // Clear the form fields
        document.getElementById('signup-name').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-pass').value = '';
    });
    




        const form1 = document.getElementById('logform');
        form1.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-pass').value;

            // Check if the email already exists in localStorage
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            
            if (email === storedEmail && password === storedPassword) {
                alert('You are verified!'); // Success message
                document.getElementById('login-email').value= '';
                document.getElementById('login-pass').value= '';
            } else if(email === storedEmail && password != storedPassword) {
                alert('Username or Password is incorrect'); // Error message
                document.getElementById('login-email').value= '';
                document.getElementById('login-pass').value= '';
            } else if(email != storedEmail && password === storedPassword) {
                alert('Username or Password is incorrect'); // Error message
                document.getElementById('login-email').value= '';
                document.getElementById('login-pass').value= '';
            }
            else {
                alert('You are not verified!'); // Error message
                document.getElementById('login-email').value= '';
                document.getElementById('login-pass').value= '';
            }
        });
    });


    