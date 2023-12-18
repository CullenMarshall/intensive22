<script>
    // Event listener for chat form submission
    document.getElementById('chatForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let messageInput = document.getElementById('userInput');
        let message = {
            username: "<?php echo $_SESSION['username']; ?>",
            timestamp: new Date().toISOString(),
            message: messageInput.value
        };

        // Get a random Santa response
        const santaResponses = [
            "Ho ho ho! Merry Christmas!",
            "Remember to be kind and spread joy this season!",
            "Santa Claus is coming to town!",
            "Santa Claus is looking for all the naughty boys and girls!",
            "Santa Claus is needs his tummy rubbed!",
            "Santa Claus is needs a blow job!",
            "Have you been naughty or nice?",
            "Wishing you a magical and joyful Christmas!",
            "What's on your Christmas wishlist this year?"
            // Add more responses as needed
        ];
        const santaResponse = getRandomSantaResponse();

        // Add the new message and Santa's response to the chatbox
        let chatbox = document.getElementById('chatbox');
        let userMessage = document.createElement('p');
        userMessage.innerHTML = '<strong>' + message.username + '</strong>: ' + message.message + ' <em>(' + message.timestamp + ')</em>';
        let santaMessage = document.createElement('p');
        santaMessage.textContent = 'Santa Claus: ' + santaResponse;

        chatbox.appendChild(userMessage);
        chatbox.appendChild(santaMessage);
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom

        // Clear the message input
        messageInput.value = '';

        // Send the new message to the server
        fetch('fetch_messages.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        // Randomly color usernames
        let usernameElements = document.getElementsByClassName('username');
        for (let usernameElement of usernameElements) {
            let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            usernameElement.style.color = randomColor;
        }
    });
</script>