<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sat practice</title>
</head>

<body>
    <!-- <form action="loops.php" method="post">
        <label for="">Enter a number</label>
        <input type="text" name="counter">
        <input type="submit" value="Start">
    </form> -->
</body>

</html>

<?php
// assoctive arrays 

$capitals = array(
    "USA" => "Washington D.C.",
    "JAPAN" => "Kyoto",
    "KOREA" => "Seoul",
    "THAILAND" => "Bangkok",
);

echo $capitals["USA"] . '<br>';
echo $capitals["KOREA"] . '<br>';

$capitals["KOREA"] = "Sejeong City";
$capitals["INDIA"] = "New Delhi";

foreach ($capitals as $key => $value) {
    echo "{$key} {$value} <br>";
}
?>