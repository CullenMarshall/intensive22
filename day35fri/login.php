<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username'])) {
    $_SESSION['username'] = $_POST['username'];
}
?>

<!DOCTYPE html>
<html>

<body>

    <?php if (!isset($_SESSION['username'])) : ?>
        <!-- Display the login form if the user is not logged in -->
        <form method="post" action="">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <input type="submit" value="Log in">
        </form>
    <?php else : ?>
        <!-- Display logout and chat buttons if the user is logged in -->
        <button onclick="window.location.href='logout.php'">Log out</button>
        <button onclick="window.location.href='index.php'">Go to chat</button>
    <?php endif; ?>

</body>

</html>