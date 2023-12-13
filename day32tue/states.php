<?php

$data = 'a:50:{i:0;s:15:"Montgomery - AL";i:1;s:11:"Juneau - AK";i:2;s:12:"Phoenix - AZ";i:3;s:16:"Little Rock - AR";i:4;s:15:"Sacramento - CA";i:5;s:11:"Denver - CO";i:6;s:13:"Hartford - CT";i:7;s:10:"Dover - DE";i:8;s:16:"Tallahassee - FL";i:9;s:12:"Atlanta - GA";i:10;s:13:"Honolulu - HI";i:11;s:10:"Boise - ID";i:12;s:16:"Springfield - IL";i:13;s:17:"Indianapolis - IN";i:14;s:16:"Des Moines - IA ";i:15;s:11:"Topeka - KS";i:16;s:14:"Frankfort - KY";i:17;s:16:"Baton Rouge - LA";i:18;s:12:"Augusta - ME";i:19;s:14:"Annapolis - MD";i:20;s:11:"Boston - MA";i:21;s:12:"Lansing - MI";i:22;s:15:"Saint Paul - MN";i:23;s:12:"Jackson - MS";i:24;s:19:"Jefferson City - MO";i:25;s:11:"Helena - MT";i:26;s:12:"Lincoln - NE";i:27;s:16:"Carson City - NV";i:28;s:12:"Concord - NH";i:29;s:12:"Trenton - NJ";i:30;s:13:"Santa Fe - NM";i:31;s:11:"Albany - NY";i:32;s:12:"Raleigh - NC";i:33;s:13:"Bismarck - ND";i:34;s:13:"Columbus - OH";i:35;s:18:"Oklahoma City - OK";i:36;s:10:"Salem - OR";i:37;s:15:"Harrisburg - PA";i:38;s:15:"Providence - RI";i:39;s:13:"Columbia - SC";i:40;s:11:"Pierre - SD";i:41;s:14:"Nashville - TN";i:42;s:11:"Austin - TX";i:43;s:19:"Salt Lake City - UT";i:44;s:15:"Montpelier - VT";i:45;s:13:"Richmond - VA";i:46;s:12:"Olympia - WA";i:47;s:15:"Charleston - WV";i:48;s:12:"Madison - WI";i:49;s:13:"Cheyenne - WY";}';

//make array 
$statsNcaps = unserialize($data);

//ABC order
sort($statsNcaps);

// get array to hold the results
$results = array();

// Check if a query parameter is set
if (isset($_GET['query'])) {
    $query = filter_input(INPUT_GET, 'query'); // I dn't know what this is doing

    // Loop through the cities to find the cities matching the characters user typed in
    foreach ($statsNcaps as $city) {
        // Check if a city matches to the text typed by the user, using the stripos() method
        if (stripos($city, $query) !== false) {
            // When you find a result that matches with the search, add it to the $resuluts array 
            array_push($results, $city);
        }
    }
}
// implode the resluts into a string
// echo implode('|', $results);
//save to variable??
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>States and Caps</title>
    <style>
        body {
            display: flex;
            flex-direction: column;
            color: black;
            height: 100vh;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            /* background-image: url(./Untitled\ design.png); */
        }

        #divparent {
            font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
            display: flex;
            flex-direction: column;

        }

        form {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2rem;


        }

        #selectedState {
            font-size: 4rem;
        }
    </style>
</head>
<div id="selectedState"></div>
<div id="divParent">
    <form action="states.php" method="get">
        <input type="text" name="query" placeholder="State Capital | abbreviation">
        <input type="submit" value="Search">
    </form>
    <div id="statelist">
        <?php foreach ($results as $value) {
            echo "<div class='listofstates'>" . $value . "</div>";
        }
        ?>
    </div>
</div>

<body>

    <script>
        //html form....maybe switch to divs 
        // let userInput = document.querySelector('input[name="query"]').value;

        let allOptions = document.querySelectorAll('.listofstates');

        for (let i = 0; i < allOptions.length; i++) {
            allOptions[i].addEventListener("click", () => {
                selectedState.innerHTML = allOptions[i].textContent;
            });
        }





        // Validate the user input
        // if (userInput.trim() === '') {
        //     console.error('Error: Search query is empty');
        //     return;
        //}
        // get the results from the php file by making a the userinput encoded
        // fetch('states.php?query=' + encodeURIComponent(userInput))
        //     .then(response => response.json())
        //     .then(matches => {
        //         //console.log(matches);
        //         //need to figure out how to make list 
        //     })
        //     .catch(error => console.error('Error:', error));
    </script>
</body>

</html>