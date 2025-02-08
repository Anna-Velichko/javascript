// - Скласти розклад на тиждень за домопоги switch.
//     Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//     (можна замість плану на день, назву дня англійською).

switch (+prompt("Введіть число від 1 до 7")) {
    case 1:
        console.log('Сніданок');
        console.log('Душ');
        console.log('Навчання');
        break;
    case 2:
        console.log('Прогулянка');
        console.log('Обід');
        console.log('Кіно');
        break;
    case 3:
        console.log('Стоматолог');
        console.log('Читання');
        console.log('Англійська');
        break;
    case 4:
        console.log('Купити квитки');
        console.log('Подорож');
        console.log('Відпочинок');
        break;
    case 5:
        console.log('Закупки');
        console.log('Привітати з ДН');
        console.log('Вечеря');
        break;
    case 6:
        console.log('Співбесіда');
        console.log('Відпочинок');
        console.log('Святкування');
        break;
    case 7:
        console.log('Заняття');
        console.log('Пробіжка');
        console.log('Театр');
        break;
    default:
        console.log('Помилка!')

}