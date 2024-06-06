<?php

$title = "lesson17";

//////////////////////////////////////////// Задание 1///////////////////////////////////////////////////////////////////
echo("<h3>Задание 1</h3>");

$a = 9;
$b = -1;

if ($a >= 0 && $b >= 0) {
    if ($a > $b) {
        echo $a - $b;
    } else {
        echo $b - $a;
    } 
} 
elseif ($a < 0 && $b < 0) {
    echo $a * $b;
} 
else {
    echo $a + $b;
}
echo("<hr>");

////////////////////////////////////////////////Задание 2////////////////////////////////////////////////////////////////
echo("<h3>Задание 2</h3>");

function getString($a1) {
    $result = "";
    if ($a1 <= 15 && $a1 >=0) {
        while ($a1<=15) {
            $result = $result . $a1 . " ";
            $a1 = $a1 + 1;
        }
    } else {
        $result = "Переменая a не находится в диапазоне 0..15!";
    }

    return $result;

}

$a = 6;
switch ($a) {
    case 0:
        echo getString($a);
        break;
    case 15:
        echo '15';
        break;
    default:
        echo getString($a);
        break;
}
echo("<hr>");

/////////////////////////////////////////////// Задание 3///////////////////////////////////////////////////////////
echo("<h3>Задание 3</h3>");

function add($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    if ($b == 0)
        return 'На ноль делить нельзя';
    return $a / $b;
}

echo("<p>Сложение: " . add(8, 1) . "</p>");
echo("<p>Вычитание: " . subtract(8, 2) . "</p>");
echo("<p>Умножение: " . multiply(7, 9) . "</p>");
echo("<p>Деление: " . divide(33, 3) . "</p>");
echo("<hr>");

///////////////////////////////////////////////// Задание 4/////////////////////////////////////////////////////////
echo("<h3>Задание 4</h3>");

function mathOperation($arg1, $arg2, $operation)
{
    switch ($operation) {
        case '+':
            return add($arg1, $arg2);
        case '-':
            return subtract($arg1, $arg2);
        case '*':
            return multiply($arg1, $arg2);
        case '/':
            return divide($arg1, $arg2);
        default: 
            return "Неверно указана операция";
    }
}
echo mathOperation(2, 8, '/');
echo("<hr>");

////////////////////////////////////////////////////////// Задание 5////////////////////////////////////////////////////
$year12 = date('Y');

/////////////////////////////////////////////////////////// Задание 6//////////////////////////////////////////////////////
echo("<h3>Задание 6</h3>");

function power($val, $pow) {
    if ($pow == 1) {
        return $val;
    }
    else {
        return  $val * power($val, $pow - 1);
    }
}
echo(power(3, 3));
echo("<hr>")

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
</head>
<body>
<h3>Задание 5</h3>
<p>Год (1 способ): <?php echo date('Y'); ?></p>
<p>Год (1.2 способ): <?= $year12 ?></p> 
<p>Год (2 способ): <?= $year2 ?></p>
<?php
$year3 = date('Y');
$content = file_get_contents('ForTask5.html');
$content = str_replace('{{ year }}', $year3, $content);
echo $content;
?>
<?php require('forTask5(4).php') ?>
</body>
</html>