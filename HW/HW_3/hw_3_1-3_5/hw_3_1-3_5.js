// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
for (let i = 0; i < 10; i++) {
    document.write("<div>Lorem ipsum dolor sit.</div>");
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let j = 0; j < 10; j++) {
    document.write(`<div>ipsum dolor sit ${j}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let k = 0;
while (k < 20) {
    document.write(`<h1>Dolor, impedit?</h1>`);
    k++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let l = 0;
while (l < 20) {
    document.write(`<h1>Dolor, impedit? ${l}</h1>`);
    l++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write(`<ul>`);
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (const item of listOfItems) {
    document.write(`<li>${item}</li>`);
}
document.write(`</ul>`);