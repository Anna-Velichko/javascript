// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
//..................списано з розбору......................//
function swap(arr, i1, i2) {
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return '!!!!'
}

console.log(swap([11, 22, 33, 44], 0, 3));



// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
//..................списано з розбору......................//
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            chosenCurrency = item;
            return sumUAH/chosenCurrency.value;
        }


    }
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));