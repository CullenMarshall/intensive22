<!--     
    a. get the json using file_get_contents("./movies.json")
    b. decode the json
    c. loop through the movies array inside that object
        1. store the current movie as a variable
        2. include card.php
 -->
<?php
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blockbuster Video</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <img id="logo" src="./blockbuster_logo.jpg" alt="logo">
        <h1 class="toptext">MOVIES</h1>

    </header>


    </nav>

    <div class="cleanup">
        <div class="cards-container">
            <?php
            $json = file_get_contents("./movies.json"); // get the movies
            $movies = json_decode($json)->movies; //Takes a JSON encoded string and converts it into a PHP value.

            foreach ($movies as $movie) {
                $title = $movie->title;
                $genre = $movie->genre;
                $duration = $movie->duration;
                $filename = $movie->filename;
                $poster = $movie->poster;

                include "./card.php"; // saves the movies to a variable to be used in card
            }
            ?>
        </div>
    </div>
    <script>
        function showVideo(title) {
            var video = document.getElementById('video-' + title);
            video.style.display = 'block';
        }
    </script>
</body>

</html>