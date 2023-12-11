<?php
$my_age = 10;
$my_name = "Marie";
$country = "Korea";
$isWoman = false;

if ($my_age > 3) {
    echo "You are really young... just only " . $my_age . " years old";
}

if ($my_name == "Marie" && $country == "Korea") {
    echo "Welcome to " . $country . " " . $my_name;
}

if (!$isWoman || $my_name != "Marie") {
    echo "go home and watch TV";
}

$pollutionLevel = 0;
switch ($pollutionLevel) {
    case 0:
        echo "No Pollution";
        break;
    case 20:
        echo "No Pollution";
        break;
    case 50:
        echo "Little pollution";
        break;
    case 90:
        echo "Little pollution → wear a mask";
        break;
    case 110:
        echo "Medium pollution → wear a mask";
        break;
    case 140:
        echo "Medium pollution → wear a mask";
        break;
    case 180:
        echo "High pollution →  wear a mask and no activities outside";
        break;
    case 210:
        echo "Very High pollution → stay at home !";
        break;
    case 250:
        echo "Very high pollution → stay at home !";
        break;
    default:
        echo "no data entries  
        Do what you want !";
        break;
}

$password = "banana";

echo $canEnter = ($password == "banana") ? true : false;



$isEmployed = false;
if ($isEmployed === true) {
    $status =  "you have a job";
} else {
    $status = "no job";
}
echo $status;
