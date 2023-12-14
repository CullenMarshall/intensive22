<!-- 
    2. CARD.PHP 
    a. Create the HTML for a card
    b. Insert the values using the variable from 1.c.1 above
    c. Set the poster attribute for the video tag
    d. wrap the video with an <a></a> tag
        1. url_encode the title
        2. href="watch.php?path=######.mp4&title=######"
 -->
<div class="card">
    <img src="<?php echo 'posters/' . $poster ?>" alt="<?php echo $title ?>">
    <h3><?php echo $title ?></h3>
    <p><?php echo $genre ?></p>
    <video id="video-<?php echo $title ?>" src="<?php echo 'videos/' . $filename ?>" poster="<?php echo 'images/' . $poster ?>" controls style="display: none;"></video>
    <a href="watch.php?path=<?php echo urlencode('videos/' . $filename) ?>&title=<?php echo urlencode($title) ?>" onclick="showVideo('<?php echo $title ?>')">Watch Now</a>
</div>