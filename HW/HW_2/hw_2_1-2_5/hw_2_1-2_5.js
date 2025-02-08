// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [NaN,false,undefined,null,'Okten','school',3.14,2000,true,-10];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title:'Kolobok',pageCount:'31', genre:'adventure'};
let book2 = {title:'Repka',pageCount:'10', genre:'fantasy'};
let book3 = {title:'Red hood',pageCount:'', genre:'crime'};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title:'Kolobok',
    pageCount:'31',
    genre:'adventure',
    authors:[{
        name:'xx',
        age:30
    }]
};
let book22 = {
    title:'Repka',
    pageCount:'10',
    genre:'fantasy',
    authors:[{
        name:'yy',
        age:40
    }]
};
let book33 = {
    title:'Red hood',
    pageCount:'',
    genre:'crime',
    authors:[{
        name:'ww',
        age:50
    }]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:'kkkk', username:'qwerty0',password:'0000'},
    {name:'qqqq', username:'qwerty1',password:'1111'},
    {name:'wwww', username:'qwerty2',password:'2222'},
    {name:'rrrr', username:'qwerty3',password:'3333'},
    {name:'tttt', username:'qwerty4',password:'4444'},
    {name:'yyyy', username:'qwerty5',password:'5555'},
    {name:'ssss', username:'qwerty6',password:'6666'},
    {name:'ffff', username:'qwerty7',password:'7777'},
    {name:'gggg', username:'qwerty8',password:'8888'},
    {name:'hhhh', username:'qwerty9',password:'9999'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temps = [
    {day:'Monday',morning: 1 ,afternoon: 5 ,evening: 0 },
    {day:'Tuesday',morning: 2 ,afternoon: 6 ,evening: 1 },
    {day:'Wednesday',morning: 3 ,afternoon: 7 ,evening: 2 },
    {day:'Thursday',morning: 4 ,afternoon: 8 ,evening: 3 },
    {day:'Friday',morning: 5 ,afternoon: 9 ,evening: 4 },
    {day:'Saturday',morning: 6 ,afternoon: 10 ,evening: 5 },
    {day:'Sunday',morning: 7 ,afternoon: 11 ,evening: 6 },
];
