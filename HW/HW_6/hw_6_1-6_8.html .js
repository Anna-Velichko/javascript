// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str = 'hello world';
console.log(str.length);
const str2 = 'lorem ipsum';
console.log(str2.length);
const str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const str4 = 'hello world';
console.log(str4.toUpperCase());
const str5 = 'lorem ipsum';
console.log(str5.toUpperCase());
const str6 = 'javascript is cool';
console.log(str6.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const str7 = 'HELLO WORLD';
console.log(str7.toLowerCase());
const str8 = 'LOREM IPSUM';
console.log(str8.toLowerCase());
const str9 = 'JAVASCRIPT IS COOL';
console.log(str9.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.
let str10 = ' dirty string   ';
let str11 = str10.trim();
console.log(str11);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str12 = 'Ревуть воли як ясла повні';
function stringToarray() {
    let splitStr = str12.split(' ');
    return splitStr;
}
console.log(stringToarray());


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let strings = numbers.map(number => number.toString());
console.log(strings);

// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(arr,direction){
    if (direction === 'ascending') return arr.sort((a,b) => a - b);
    if (direction === 'descending') return arr.sort((a,b) => b-a);
}

console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const courses = coursesAndDurationArray
    .sort((a,b) =>  b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => {
        value.id = index + 1;
        return value;
    });
console.log(courses);
