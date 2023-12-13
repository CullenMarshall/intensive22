<?php
$message = "Hello this is the default";
if (isset($_GET['message'])) $message = $_GET['message']
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            color: black;
            height: 100vh;
            align-items: center;
            justify-content: center;
        }

        div {
            font-size: 5em;
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        }
    </style>
</head>

<body>

    <body>
        <div class="number"><?php echo $_GET["number"]; ?></div>
        <div class="weather"><?php echo $_GET["weather"]; ?></div>
        <div class="message"><?php echo $_GET["message"]; ?></div>
    </body>
</body>

</html>