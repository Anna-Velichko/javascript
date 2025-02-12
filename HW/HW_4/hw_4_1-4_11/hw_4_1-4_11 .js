// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle(a, b) {
    return a * b;
}

console.log(squareRectangle(2, 5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(radius) {
    return Math.PI * radius * radius;
}

console.log(squareCircle(2));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder(h, radius) {
    return 2 * Math.PI * radius * (radius + h);
}

console.log(squareCylinder(5, 3));


// - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(array) {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

printArrayElements([1111,2222,3333,4444,5555]);


// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function createP(text) {
    document.write(`
    <p>${text}</p>
    `);
}

createP("Слава Україні!");

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function createUlWithLi(text) {
    document.write
    (`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}

createUlWithLi('qwerty');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
//..................списано з розбору......................//
function createLi(text, counter) {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}

createLi('qasdfg', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
function acceptArrayElements(arrayOf) {
    document.write(`<ul>`);
    for (const arrayElement of arrayOf) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

acceptArrayElements(['qwer', 1, 2, 4, true, 'ghjk']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function acceptArrayObj(arrObj) {
    for (const arrObjElement of arrObj) {
        document.write(`<div>${arrObjElement.id},${arrObjElement.name},${arrObjElement.age}</div>`)
    }
}

acceptArrayObj([{id: 2, name: 'Semen', age: 77}]);





// - створити функцію яка повертає найменьше число з масиву
//..................списано з розбору......................//
function arrayMinValue(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([99,3344,67,-86,32,78,-2,0]));




// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    let x = 0;
    for (const arrElement of arr) {
        x = x + arrElement;
    }
    return x;
}

console.log(sum([1, 2, 10]));



