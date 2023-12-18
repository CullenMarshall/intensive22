<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunday</title>
</head>

<body>
    <form action="isset.php" method="post">
        <label for="username">username: </label>
        <input type="text" name="username"><br>
        <label for="password">password: </label>
        <input type="password" name="password"><br>
        <input type="submit" name="login" value="Log In"><br>

    </form>
</body>

</html>
<?php
// foreach ($_POST as $key => $value) {
//     echo "{$key} = {$value}<br>";
// }

if (isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (empty($username)) {
        echo "Username is missing <br>";
    } else {
        echo "Welcome {$username} <br>";
    }
        else(empty($password)) {
        echo "You forgot your password big dog!<br>";
    } else {
        echo "Ready to fuck shit up?";
    }
}
?>