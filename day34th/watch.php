<!-- 
    3. WATCH.PHP  
    a. get the video path from the $_GET superglobal variable
    b. Create the HTML to show a large video 1080x720
    c. Set the title from the $_GET title parameter
 -->
<?php
// a. get the video path from the $_GET superglobal variable
$path = filter_input(INPUT_GET, 'path', FILTER_SANITIZE_URL);

// c. Set the title from the $_GET title parameter
$title = filter_input(INPUT_GET, 'title', FILTER_SANITIZE_STRING);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Watch Movie</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(180deg, #1140AA 0%, #1f6fd4 100%);
        }

        .go-back-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            position: absolute;
            top: 20px;
            left: 20px;
        }

        .go-back-button:hover {
            background-color: red
        }

        .video-container {
            position: relative;
            width: 1080px;
            height: 720px;
        }

        .video-overlay {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            font-size: 60px;
            color: #FFAA07;
            text-shadow: #1140AA 2px 2px;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            word-wrap: break-word;
        }
    </style>
</head>

<body>
    <div class="video-container">
        <video id="video-<?php echo $title ?>" width="1080" height="720" controls>
            <source src="<?php echo $path; ?>" type="video/mp4">
        </video>
        <div class="video-overlay">YOU FORGOT TO REWIND YOUR LAST VIDEO PLEASE GO BACK AND REWIND BEFORE WATCHING ANOTHER VIDEO</div>
    </div>
    <!-- go back to search movies button  -->
    <a class="go-back-button" href="index.php">Go Back</a>
    <script>
        //gets the rid of the video when the user leaves the page
        window.addEventListener('beforeunload', function() {
            var video = document.getElementById('video-<?php echo $title ?>');
            video.pause();
            video.currentTime = 0;
        });
    </script>
</body>

</body>

</html>