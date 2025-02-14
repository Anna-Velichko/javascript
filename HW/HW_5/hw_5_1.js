// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const squareRectangle =(a, b) => a * b;
console.log(squareRectangle(2,3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const squareCircle = radius => Math.PI * radius * radius;
console.log(squareCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const squareCylinder = (h, radius) => 2 * Math.PI * radius * (radius + h);
console.log(squareCylinder(2,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
const printArrayElements =(array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
};
printArrayElements([666,true,'mnbvc',1223]);


// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
const createP = text => {
    document.write(`
    <p>${text}</p>
    `);
}
createP('tratata');

// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
const createUlWithLi = text => {
    document.write
    (`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
createUlWithLi('ole-ole');

// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
const createLi = (text, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
createLi('GOAL', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
const acceptArrayElements = arrayOf => {
    document.write(`<ul>`);
    for (const arrayElement of arrayOf) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

acceptArrayElements(['WWWW', 11111, 20000, 4, true, 'LLLL']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const acceptArrayObj = arrObj => {
    for (const arrObjElement of arrObj) {
        document.write(`<div>${arrObjElement.id},${arrObjElement.name},${arrObjElement.age}</div>`)
    }
}
acceptArrayObj([{id: 2000, name: 'SANTAKLAUS', age: 77}]);

// - створити функцію яка повертає найменьше число з масиву
const arrayMinValue = numbers => {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(arrayMinValue([99,3344,67,-86000,32,78,-2,0]));

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sum = (arr) => {
    let x = 0;
    for (const arrElement of arr) {
        x = x + arrElement;
    }
    return x;
}
console.log(sum([1, 2, 10]));


// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
const swap = (arr, i1, i2) =>{
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return '!!!!'
}

console.log(swap([11, 22, 33, 44], 0, 2));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            chosenCurrency = item;
            return sumUAH/chosenCurrency.value;
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));
