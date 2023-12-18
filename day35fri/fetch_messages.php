<?php
$filepath = 'messages.txt';

if (file_exists($filepath)) {
    $lines = file($filepath);
    $messages = array();

    foreach ($lines as $line) {
        $printedMessage = explode('|', $line);
        if (count($printedMessage) < 3) {
            // Skip this line or handle this case appropriately
            continue;
        }
        list($username, $message, $timestamp) = $printedMessage;
        $date = new DateTime($timestamp);
        $formattedTime = $date->format('H:i:s');
        $messages[] = array(
            'username' => $username,
            'message' => $message,
            'timestamp' => $formattedTime
        );
    }

    echo json_encode($messages);
} else {
    echo "File not found.";
}
