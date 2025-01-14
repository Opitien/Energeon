document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const firstName = document.getElementById('firstName').value;
    const secondName = document.getElementById('secondName').value;
    const messageInput = document.getElementById('message-input').value;

    // Display a success message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Thank you, ${firstName} ${secondName}! Your message has been received.`;
    
    // Add success class to message for transition effect
    messageDiv.classList.add('success');

    // Hide the form
    const form = this;
    form.classList.add('hidden');

    // Optionally, you can clear the form fields after a delay
    setTimeout(() => {
        form.reset();
        messageDiv.classList.remove('success'); // Reset message opacity
        form.classList.remove('hidden'); // Show form again if needed
    }, 5000); // Adjust the delay as needed (5000ms = 5 seconds)
});