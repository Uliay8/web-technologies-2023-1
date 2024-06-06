<?php
date_default_timezone_set('Asia/Yekaterinburg');
$title = "lesson16";
$header = "Hello World!!!";
$year = 2024;

function getCurrentTime() {
    $hour = date('H'); //от 00 до 23
    $minute = date('i'); //от 00 до 59

    if ($hour == 0 || ($hour >= 5 && $hour <=20)) {
        $hourText = ' часов ';
    } elseif ($hour = 1 || $hour = 21 ) {
        $hourText = ' час ';
    } else {
        $hourText = ' часа ';
    }

    if ($minute % 10 == 1) {
         $minuteText = ' минута';
    } else if ($minute % 10 == 2 || $minute % 10 == 3 || $minute % 10 == 4) {
        $minuteText = ' минуты';
    } else {
        $minuteText = ' минут';
    }

    $timeText = $hour . $hourText . $minute . $minuteText;
    return $timeText;
        
}

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>

<body>
    <header>
        <h1><?php echo $header; ?></h1>
    </header>
    <main>
        <p>It is <?php echo $year?> year now!</p>
        <p>It is <?php echo getCurrentTime()?> now!</p>
    </main>
</body>

</html>