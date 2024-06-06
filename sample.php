<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
    <p><?php echo("<h3>Задание 1</h3>"); ?></p>
    <p><?php fun1(); ?></p>
    <p><?php echo ("<hr>"); ?></p>
    <p><?php echo("<h3>Задание 2</h3>"); ?></p>
    <p><?php fun2($dict); ?></p>
    <p><?php echo ("<hr>"); ?></p>
    <p><?php echo("<h3>Задание 3</h3>"); ?></p>
    <p><?php echo (fun3($text)); ?></p>
    <p><?php echo ("<hr>"); ?></p>
    <p><?php echo("<h3>Задание 4</h3>"); ?></p>
    <p><?php echo (createMenu($menu)); ?></p>
    <p><?php echo ("<hr>"); ?></p>
    <p><?php echo("<h3>Задание 5</h3>"); ?></p>
    <p><?php echo ("Пока не выполнено"); ?></p>
    <p><?php echo ("<hr>"); ?></p>
    <p><?php echo("<h3>Задание 6</h3>"); ?></p>
    <p><?php echo (fun6($dict)); ?></p>
    <p><?php echo ("<hr>"); ?></p>
    
</body>
</html>