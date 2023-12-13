<?php
// Question 1 : strlen

// Try the strlen function on this text and echo your result : 5 paragraphs, 500 words, 3337 characters generated


$text = "Praesent id finibus nisi. Ut eu porttitor diam, ut vestibulum tortor. Donec interdum a libero eget blandit. Pellentesque consectetur aliquet fringilla. Nulla facilisi. Maecenas vehicula eget elit eget tempus. Pellentesque lectus dolor, maximus eu leo et, imperdiet vehicula dolor. Cras eros tellus, viverra id odio non, elementum sollicitudin nulla. Morbi euismod, eros vitae porta venenatis, elit ipsum dictum elit, ac aliquet diam enim non lacus. Praesent id purus orci. Ut tortor nunc, porta ut ligula vitae, egestas laoreet felis. Quisque quis elit sit amet sapien sollicitudin posuere cursus sit amet sem. Suspendisse sollicitudin, mauris a vestibulum mattis, nisl lacus ullamcorper erat, at fermentum justo ligula vitae dui. Aliquam placerat arcu lectus, convallis consectetur eros tincidunt at. Aenean interdum vehicula dapibus. Nulla turpis odio, feugiat quis ultricies pellentesque, maximus eget risus.

Mauris viverra bibendum nisl ac malesuada. Pellentesque accumsan massa at lectus consequat, id auctor diam pellentesque. Vivamus congue nec ante non consequat. Morbi at velit quis est consectetur placerat. Duis ac purus est. Donec eget sapien velit. Praesent at tempor nulla, eu placerat nunc. In consectetur leo sit amet tortor ultricies, in eleifend tellus auctor. Etiam quis urna pulvinar, auctor elit eget, scelerisque nisi.\n

Aenean turpis erat, elementum venenatis libero vitae, accumsan vehicula justo. Donec elementum ultrices magna, sed porttitor tellus convallis quis. Donec cursus eros sit amet felis volutpat, vel vestibulum purus aliquam. Fusce mattis consectetur nulla, quis tincidunt nisl venenatis nec. Fusce id tincidunt lacus. Nunc ultricies consequat ante id laoreet. Mauris varius luctus diam non varius. Duis placerat aliquet mollis. Nullam at sapien nec orci fringilla dictum ut sed ipsum. In eu nisi pulvinar neque euismod blandit non ac dui. Proin scelerisque, odio vel mollis egestas, tellus tortor porttitor enim, eget tincidunt sapien quam sed ligula. Nam eu lectus vel nisi lacinia blandit eget eget enim. Phasellus a augue tempus, dictum orci nec, convallis lorem. Ut tincidunt dapibus felis nec cursus.

Donec fermentum mollis nisi, sodales dapibus velit. Vivamus cursus erat interdum nisl gravida convallis sed eu orci. Donec vel ex fringilla, iaculis sem at, tincidunt sapien. Vivamus nibh odio, dapibus in ornare a, feugiat vitae massa. Maecenas ullamcorper consequat nunc a semper. Etiam maximus, lacus eu ornare mattis, ligula erat gravida urna, eget convallis urna orci sit amet magna. Duis bibendum dolor a eros sagittis, eget iaculis metus suscipit.

Sed ante tellus, imperdiet eu bibendum vel, facilisis in orci. Sed turpis erat, auctor volutpat velit non, accumsan accumsan enim. Nam ultricies finibus mi, ut facilisis diam cursus at. Suspendisse et augue nec augue vulputate eleifend quis id lectus. Nunc eu eros est. Nullam nec felis et nibh rhoncus ultricies. Duis sed faucibus sapien. Sed mi dolor, tempor in suscipit nec, tristique et enim. Donec vitae molestie felis. Phasellus lobortis auctor risus, sit amet eleifend lectus consectetur ac. Duis nec nunc tortor. Etiam interdum ipsum neque, id bibendum eros commodo tempor. Proin eget justo nec ipsum bibendum mollis in in velit. Fusce ac ligula vitae tellus ultrices facilisis. Sed massa nunc, cursus eget dignissim quis, ornare vitae.";

$paragrphLen = 0;
$wordLen = 0;
$charNum = 0;

$paragraphs = explode("\n", $text);
$paragrphLen = count($paragraphs);

for ($i = 0; $i < strLen($text); $i++) {
    if ($text[$i] == "\n") {
        $paragrphLen++;
    }
    if ($text[$i] == " ") {
        $wordLen++;
    }
    $charNum++;
}
echo "Paragraphs: $paragrphLen, Words: $wordLen, Characters: $charNum \n";

$text = str_replace("diam", "BANANAAAA", $text); //question 3
for ($i = 0; $i < strlen($text); $i++) {
    $text[$i] = strtolower($text[$i]);
}
echo "$text . \n";

$text = str_replace("DIAM", "BANANAAAA", $text); //question 3
for ($i = 0; $i < strLen($text); $i++) {
    $text[$i] = strtoupper($text[$i]);
}
echo "$text . \n";


// Try to display the name of the day : Wednesday

// Try to display the date of today as : Wednesday the 24th


// Try to display the date as : May 24, 2023, 2:36 pm


// Try to display the date as : 05.24.23


// Try to display the date as : Wed May 24 14:36:41 Asia/Seoul 2023

// Try to display the date as : 2023-05-24 14:36:41
$num3 = date('F' . 'd' . ', ' . 'Y' . ', ' . 'g' . ':' . 'i' . 'a');
$num4 = date('m' . '.' . 'd' . '.' . 'y');
$num5 = date('Y' . '-' . 'm' . '-' . 'd' . ' ' . 'H' . ':' . 'i' . ':' . 's');
$day = date('l');
$month = date('m');
// $year = date('Y');
// $hour = date('H');
// $minute = date('i');

echo "Today is $day <br>";
echo "Today is $day the $month <br>";
echo "Today is $num3 <br>";
echo "Today is $num4 <br>";
echo "Today is $num5 <br>";
