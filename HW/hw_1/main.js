// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let a = 'hello';
console.log(a);
let b = 'owu';
console.log(b);
let c = 'com';
console.log(c);
let d = 1;
console.log(d);
let e = 10;
console.log(e);
let f = -999;
console.log(f);
let g = 123;
console.log(g);
let h = 3.14;
console.log(h);
let i = 2.7;
console.log(i);
let j = 16;
console.log(j);
let k = true;
console.log(k);
let l = false;
console.log(l);
// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Hanna';
let lastName = 'Velichko';
let middleName = 'Volodymyrivna';
let person = lastName + ' ' + firstName + ' ' + middleName;
console.log(person);
// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let m = 100;
console.log(typeof m);
let n = '100';
console.log(typeof n);
let o = true;
console.log(typeof o);
// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль
let firName = prompt("Введіть ваше ім'я:");
let midName = prompt("Введіть ваше по-батькові:");
let age = +prompt("Введіть ваш вік:");

console.log("Ім'я: " + firName);
console.log("По-батькові: " + midName);
console.log("Вік: " + age);

