document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('frontform');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-pass').value;
        // Check if the email already exists in localStorage
        const storedEmail = localStorage.getItem('email');
        
        if (storedEmail === email) {
            // Email already exists, throw an error
            alert('Email already exists. Please use a different email address.');
            document.getElementById('signup-name').value = '';
            document.getElementById('signup-email').value = '';
            document.getElementById('signup-pass').value = '';
        } else {
            // Email does not exist, proceed with sign up
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            alert('Signedin Successfully');
            document.getElementById('signup-name').value = '';
            document.getElementById('signup-email').value = '';
            document.getElementById('signup-pass').value = '';
        }
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
    })