<!-- Making a simple group chat program
needs to do:
1. display all messages by showing the message and the who sent it
2. send a message
3. delete a message
4. allow user to sign in with a user name
5. display user name when they send a message 
6. display time when message was sent
7. keep a file of all messages sent
 -->
<?php
session_start();

// Handle the chat form submission
if (isset($_POST['message'])) {
    // Prepare the message
    $message = sprintf("%s|%s|%s\n", $_SESSION['username'], $_POST['message'], date('Y-m-d H:i:s'));

    // Append the message to the file
    file_put_contents('messages.txt', $message, FILE_APPEND);
}

// Read the contents of messages.txt
$contents = file_get_contents('messages.txt');
$messages = explode("\n", $contents);
?>

<!DOCTYPE html>

<link rel="stylesheet" href="style.css">
<html>

<body>

    <div class="container">
        <div class="chatArea">

            <h1>Christmas Chat</h1>

            <div id="chatbox">
                <?php
                foreach ($messages as $message) {
                    if (!empty($message)) {
                        // Split the message into its components
                        list($username, $text, $timestamp) = explode('|', $message);
                        echo '<p class="username"><strong>' . $username . '</strong><em>(' . $timestamp . ')</em>: ' . $text . '</p>';
                    }
                }
                ?>
            </div>


            <div class="chatMessages">
                <?php if (isset($_SESSION['username'])) : ?>
                    <!-- Display the chat form if the user is logged in -->
                    <form method="post" action="" id="chatForm">
                        <label class="messageInput" id="messytext" for="message">Message:</label>
                        <input class="messageInput" type="text" id="message" name="message" required>
                        <input class="messageInput" type="submit" value="Send" id="subbut">
                    </form>
                <?php else : ?>
                    <!-- Display a login link if the user is not logged in -->
                    <p>You must <a href="login.php">log in</a> to chat.</p>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <button onclick="window.location.href='login.php'">Log Out</button>
    <script>
        document.getElementById('chatForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let messageInput = document.getElementById('message');
            let message = {
                username: '<?php echo $_SESSION['username']; ?>',
                timestamp: new Date().toISOString(),
                message: messageInput.value
            };
            // Add the new message to the chatbox
            let chatbox = document.getElementById('chatbox');
            let p = document.createElement('p');
            let username = document.createElement('strong');
            username.textContent = message.username;
            let timestamp = document.createElement('em');
            timestamp.textContent = ` (${message.timestamp})`;
            p.appendChild(username);
            p.appendChild(timestamp);
            p.appendChild(document.createTextNode(`: ${message.message}`));
            chatbox.appendChild(p);
            chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
            // Clear the message input
            messageInput.value = '';
            // Send the new message to the server
            fetch('save_message.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });
        });

        let lastMessageTimestamp = null;
        // gets messages from the server and adds them to the chatbox
        setInterval(function() {
            fetch('fetch_messages.php')
                .then(response => response.json())
                .then(messages => {
                    let chatbox = document.getElementById('chatbox');
                    for (let message of messages) {
                        // Only add messages that haven't been added yet
                        if (lastMessageTimestamp === null || message.timestamp > lastMessageTimestamp) {
                            let p = document.createElement('p');
                            let username = document.createElement('strong');
                            username.textContent = message.username;
                            let timestamp = document.createElement('em');
                            timestamp.textContent = ` (${message.timestamp})`;
                            p.appendChild(username);
                            p.appendChild(timestamp);
                            p.appendChild(document.createTextNode(`: ${message.message}`));
                            chatbox.appendChild(p);
                            lastMessageTimestamp = message.timestamp;
                        }
                    }
                    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
                });
        }, 5000); // Fetch new messages every 5 seconds

        // user names are different colors 
        // let username = document.createElement('strong');
        // username.textContent = message.username;
        // let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        // username.style.color = randomColor;
    </script>
    <script>
        document.getElementById('chatForm').addEventListener('submit', function(e) {
            let messageInput = document.getElementById('message');
            let message = {
                username: "<?php echo $_SESSION['username']; ?>",
                timestamp: new Date().toISOString(),
                message: messageInput.value

            };

            // Get a random Santa response
            function getRandomSantaResponse() {
                const santaResponses = [
                    "Ho ho ho! Merry Christmas!",
                    "Remember to be kind and spread joy this season!",
                    "Santa Claus is coming to town!",
                    "Santa Claus is looking for all the naughty boys and girls!",
                    "Santa Claus is needs his tummy rubbed!",
                    "Have you been naughty or nice?",
                    "Wishing you a magical and joyful Christmas!",
                    "What's on your Christmas wishlist this year?"
                    // Add more responses as needed
                ];
                const randomIndex = Math.floor(Math.random() * santaResponses.length);
                return santaResponses[randomIndex];
            }
            let santaResponse = getRandomSantaResponse();
            // Add the new message and Santa's response to the chatbox
            let chatbox = document.getElementById('chatbox');
            let userMessage = document.createElement('p');
            // userMessage.innerHTML = '<strong>' + message.username + '</strong>: ' + message.message + ' <em>(' + message.timestamp + ')</em>';
            let santaMessage = document.createElement('p');
            santaMessage.className = 'santa-response';
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
        });
    </script>

</body>

</html>