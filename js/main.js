//Переменные
let num = 266219;
let num2 = num.toString().split('').reduce(function(product, value) { 
    return product * value; 
});
let num3 = num2 ** 3;

//Вывод в консоль
console.log(num3.toString().slice(0,2));








