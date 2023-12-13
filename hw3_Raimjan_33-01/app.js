// dz 3

// Таблица умножения от 2 до 10

var numb = parseInt(Number(prompt("Введите число от 2 до 10!")))

for (var i = 1; i <= 10; i++) {
    if (numb > 1 && numb <= 10) {
        console.log(numb + " * " + i + " = " + (numb * i))
    } else {
        alert("Введите корректно числа от 2 до 10!")
        break
    }
}

// 2

var input = parseInt(prompt("Введите целое положительное число:"));

if (input > 0) {
    var sum = 0;

    for (var i = 1; i <= input; i++) {
        sum += i;
    }

    console.log(`Сумма всех чисел от 1 до ${input} равна ${sum}.`);
} else {
    console.log("Введите корректное целое положительное число.");
}

// 3
var birthDay = [2005, 2012, 2021, 2013, 2014, 2004, 2008, 2006, 2017, 2019, 2020];

var currentYear = new Date().getFullYear();

var childrenCount = 0;

birthDay.forEach(year => {
    var age = currentYear - year;

    if (age >= 6 && age <= 11) {
        childrenCount++;
    }
});

console.log(` ${childrenCount} Детей из ${birthDay.length} получат подарки. `);
