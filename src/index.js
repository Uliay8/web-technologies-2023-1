console.log("ЗАДАНИЕ 1")
const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

function pickPropArray(array, property) {
    let result = [];
    array.forEach((item) => {
        if (item.hasOwnProperty(property)) {
            result.push(item[property])
        }
    });
    return result;
}

const result = pickPropArray(students, 'name');
console.log(result);



console.log("ЗАДАНИЕ 2")
function createCounter() {
    let count = 1;
    return function() {
        console.log(count++);
    };
};

const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();



console.log("ЗАДАНИЕ 3")
function spinWords(str) {
    let array = str.split(' ');
    array.forEach((item, index) => {
        if (item.length >= 5) array.splice(index, 1, item.split('').reverse().join(''));
    })
    console.log(array);
};

const result1 = spinWords( "Привет от Legacy" );
console.log(result1); // тевирП от ycageL

const result2 = spinWords( "This is a test" );
console.log(result2); // This is a test



console.log("ЗАДАНИЕ 4")
function findTarget(array, target) {
    let result =[];
    for (let i = 0; i < array.length; i++) {
        let theSecondNumber = target - array[i];
        array.forEach((item, index) => {
            if (item == theSecondNumber) result.push(i, index);
        });
        if (result !== []) break;
    }
    return result;
}

console.log(findTarget([2,7,11,15], 9));



console.log("ЗАДАНИЕ 5")
function findPrefix (strs) {
    //перебираем префиксы первого слова в первых двух циклах, далее проверяем есть ли этот префикс в других словах
    let result = "";
    for (let i = 0; i < strs[0].length - 1; i++) {
        let prefix = strs[0][i];
        for (let j = i + 1; j < strs[0].length; j++) {
            prefix += strs[0][j];
            let inAllWords = true;
            for (let k = 1; k < strs.length; k++) {
                if (!strs[k].includes(prefix)) {
                    inAllWords = false;
                    break;
                }
            }
            if (inAllWords && prefix.length > result.length) result = prefix;
        }
    }
    return result;
}

console.log(findPrefix(["цветок","поток","хлопок"]));
console.log(findPrefix(["собака","гоночная машина","машина"]));
