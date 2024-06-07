<?php

$title = "lesson18-Gallery";

function beforeStarting($path)
{
    if (!is_dir($path)) {
        mkdir($path);
    }
    if (!is_dir($path . 'original')) {
        mkdir($path . 'original');
    }
    if (!is_dir($path . 'miniature')) {
        mkdir($path . 'miniature');
    }

}

function checkUploadFile()
{
    $imgDir = "img/original/";
    $imgFile = $imgDir . basename($_FILES['img_file']['name']);
    $imgSize = getimagesize($_FILES['img_file']['tmp_name']);
    if ($imgSize['mime'] != 'image/jpeg') {
        echo "Это не jpg-файл!";
        return false;
    }
    if (file_exists($imgFile)) {
        echo "Этот файл уже загружен!";
        return false;
    }
    return true;
}

function logGallery() {
    $log = date('H:i:s d/m/Y') . PHP_EOL;
    $dest = 'logs/log.txt';
    if (count(file($dest)) > 9) {
        $logNumber = count(array_slice(scandir('logs'), 2)) - 1;
        rename($dest, 'logs/log' . $logNumber . '.txt');
    }
    file_put_contents($dest, $log, FILE_APPEND);
}

function createGallery($path)
{
    $gallery = "";
    foreach (array_slice(scandir($path . 'original'), 2) as $image) {
        $gallery = $gallery . '<a target="_blank" href="' . $path . 'original/' . $image . '">
            <img src="' . $path . 'miniature/' . $image . '" alt="\'$image\'"></a>';
    }
    return $gallery;
}


$message = ' ';
$messages = [
    'OK' => "Файл успешно загружен",
    'ERROR' => "Ошибка",

];

$path = 'img/';
beforeStarting($path);
logGallery();
if (!empty($_FILES)) {
    $path = "img/original/" . $_FILES["img_file"]["name"];
    if (checkUploadFile()) {
        if (move_uploaded_file($_FILES['img_file']['tmp_name'], $path)) {
            $img = imagecreatefromjpeg($path);
            $imgScale = imagescale($img , 200);
            imagejpeg($imgScale, "img/miniature/" . $_FILES["img_file"]["name"]);
            $message = "OK";
        }
        else {
            $message = "ERROR";
        }
    }
    else {
        $message = "error";
    }
    header("Location: index.php?status=$message");
    die();
}


if(!empty($_GET['status'])) {
    $message = $messages[$_GET['status']];
} 

$gallery = createGallery($path);


$content = file_get_contents('sample.html');
$content = str_replace('{{ title }}', $title, $content);
$content = str_replace('<!-- {{message}} -->', $message, $content);
$content = str_replace('<!-- {{gallery}} -->', $gallery, $content);
echo $content;
