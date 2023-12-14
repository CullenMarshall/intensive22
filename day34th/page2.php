<?php
session_start();
// Mission 1.
// Check if the cookie with a key of "screen-mode" exists.
// If it does exist and the value is "dark", set the background
// color of the page to be black and the text color to be white.
// Otherwise, the background should be white and the text black.
if (isset($_COOKIE['screen-mode']) && $_COOKIE['screen-mode'] == "dark") {
    echo "dark <br>";
    echo "<style>body{background-color:black;color:white;}</style>";
} else {
    echo "<style>body{background-color:white;color:black;}</style>";
}



// Mission 2.
// Check if the cookie with a key of "auto-login" exists.
// If it does exist, remove the cookie.
if (isset($_COOKIE["auto-login"])) {
    echo 'The cookie exists: ' . $_COOKIE["auto-login"] . '<br>';
}
// gets rid of the cookie
setcookie("auto-login", "", time() - 3600);





// Mission 3.
// Check if the session key "username" exists.
// If it does, display "Welcome, <username>!"
// Otherwise, display "Welcome, stranger!"
// ** Remember to start the session
if (isset($_SESSION["username"])) {
    echo "Welcome, " . $_SESSION["username"] . "!" . "<br>";
} else {
    echo "Welcome, stranger!" . "<br>";
}


// Mission 4.
// Check if the session key "user_id" exists.
// If it does, give it a new value.
// The new value should be a random number between 1 and 1000.
// Display the value if it exists. ex: "User id: 672"
// Otherwise, display "User id does not exist"
if (isset($_SESSION["user_id"])) {
    $_SESSION["user_id"] = rand(1, 1000);
    echo "User id: " . $_SESSION["user_id"] . "<br>";
} else {
    echo "User id does not exist" . "<br>";
}


// Mission 5.
// Create an HTML anchor tag with the text "Log Out" and an href of "logout.php"

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page 2</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #abc {
            display: flex;
            justify-content: center;
            align-items: center;

        }

        div {
            display: flex;
            align-content: center;
            height: 200px;
            width: 200px;
            background-color: red;
            color: whitesmoke;
        }
    </style>
</head>

<body>
    <a href="logout.php">Log Out</a>
    <div id="abc">
        <div>page 2</div>
    </div>
</body>

</html>