document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        // Prepare data to send
        const data = {
            name: name,
            email: email,
            message: message
        };

        // Send the data to your backend server
        fetch('http://localhost:5000/send-email', { // Replace with your server URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                alert('Email sent successfully!');
                document.getElementById('contactForm').reset(); // Reset form after successful submission
            } else {
                alert('Error sending email.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error sending email.');
        });
    }
});
