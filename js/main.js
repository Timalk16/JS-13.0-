// Переменные
let lang = prompt('Введите язык');
let namePerson = prompt('Выберите имя: Артем или Максим');


//1 способ
if (lang === 'ru') {
    console.log('Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье');
} else if (lang === 'en') {
    console.log('Monday Tuesday Wednesday Thursday Friday Saturday Sunday');
}
//2 способ
switch (lang) {
    case 'ru':
        console.log('Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье');
        break;
    case 'en':
        console.log('Monday Tuesday Wednesday Thursday Friday Saturday Sunday');
        break;
    default:
        console.log('Ошибка');
}
//3 спопсоб
let arr = [
[ 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
];
console.log('arr: ', arr);

let result = lang === 'ru' ? arr[0] : arr[1];
console.log('result: ', result);





//задание 2

let names = (namePerson === 'Максим') ? console.log('преподаватель') :

(namePerson === 'Артем') ? console.log('директор') :

console.log('студент');






