<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = ''; // Initialize an empty response string

    $lastname = $_POST['lastname'];
    $firstname = $_POST['firstname'];
    if (empty($lastname) || empty($firstname)) {
        $response .= "Name is empty\n";
    } else {
        $response .=  "The user's name is $firstname $lastname\n";
    }

    $age = $_POST['age'];
    if (($age < 0) || ($age > 120)) {
        $response .= "Age is empty\n";
    } else {
        $response .= "They are $age years old\n";
    }

    $login = $_POST['login'];
    if (empty($login)) {
        $response .= "Login is empty\n";
    } else {
        $response .= "The user login name is: $login\n";
    }

    $password = $_POST['password'];
    if (empty($password)) {
        $response .= "Password is empty\n";
    } else {
        $response .= "The password is $password\n";
    }

    $country = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING);
    if ($country === false) {
        $response .= "Country is empty\n";
    } else {
        $response .= "They are from $country\n";
    }

    $signmeup = isset($_POST['signmeup']) ? $_POST['signmeup'] : 'Not set'; // Check if signmeup exists
    if (!empty($signmeup)) {
        $response .= "They want to be signed up: $signmeup\n";
    }
}
$response = "<ul>";
$response .= "<li>User's name: $firstname $lastname</li>";
$response .= "<li>Age: $age</li>";
$response .= "<li>Login name: $login</li>";
$response .= "<li>Password: $password</li>";
$response .= "<li>Country: $country</li>";
$response .= "<li>Sign me up: $signmeup</li>";
$response .= "</ul>";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <style>
        body {
            background-color: rgb(255, 255, 255);
            font-family: 'Courier New', Courier, monospace;
            color: rgb(0, 0, 0);
            margin: 0px;
            padding: 0px;
            height: 100vh;

        }

        .parent_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 5px;

        }

        .border_con {
            border: 3px solid rgb(0, 0, 0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }

        fieldset {
            width: 200px;
            border-radius: 5px;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        #reset {
            margin-top: 1rem;
        }

        #signin {}
    </style>
</head>

<body>
    <div class="parent_container">
        <form action="formsignup.php" method="POST" id="signupForm">
            <div class="border_con">
                <div class="signinheader">
                    <h2>Sign in </h2>
                </div>
                <div class="genderbuttons">
                    <input type="radio" id="mgender" name="gender">
                    <label id="gender">man</label>
                    <label id="gender">female</label>
                    <input type="radio" id="fgender" name="gender">
                </div>
                <div>
                    <fieldset>
                        <legend>LastName</legend>
                        <div>
                            <input name="lastname" type="text" id="lastnamename" value="" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>FirstName</legend>
                        <div>
                            <input name="firstname" type="text" id="firstnamename" value="" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>Age</legend>
                        <div>
                            <input name="age" type="number" id="age" min="0" max="120" value="" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>Email</legend>
                        <div>
                            <input name="login" type="text" id="login" value="" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>Password</legend>
                        <div>
                            <input name="password" type="password" id="password" value="" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <fieldset>
                        <legend>Password</legend>
                        <div>
                            <input name="password" type="password" id="password" value="" />
                        </div>
                    </fieldset>
                </div>
                <div>
                    <select name="country" id="country">
                        <option value="" selected disabled>Select country</option>
                        <option value="usa">USA</option>
                        <option value="canada">Canada</option>
                        <option value="mexico">Mexico</option>
                        <option value="france">France</option>
                        <option value="germany">Germany</option>
                        <option value="italy">Italy</option>
                        <option value="spain">Spain</option>
                        <option value="uk">UK</option>
                        <option value="russia">Russia</option>
                        <option value="china">China</option>
                        <option value="japan">Japan</option>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="brazil">Brazil</option>
                        <option value="argentina">Argentina</option>
                        <option value="chile">Chile</option>
                        <option value="peru">Peru</option>
                        <option value="colombia">Colombia</option>
                        <option value="venezuela">Venezuela</option>
                        <option value="ecuador">Ecuador</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="paraguay">Paraguay</option>
                        <option value="uruguay">Uruguay</option>
                        <option value="panama">Panama</option>
                        <option value="korea">Korea</option>
                    </select>
                </div>
                <div>
                    <label class="switch">
                        <input type="checkbox" name="signmeup">
                        <span class="slider round">Sign me up!</span>
                </div>
                <div>
                    <button type="submit" id="signin" name="signin" class="signinbutton">Sign up</button>
                </div>
                <div>
                    <button id="reset" name="reset" class="reset">reset</button>
                </div>
        </form>
    </div>
    <div id="responsedata"><?= $response ?></div>
    <script>


    </script>

</body>

</html>