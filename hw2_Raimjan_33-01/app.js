// 2 dz

// 1 светофор

var color = prompt("Введите цвет светофора: (красный (red), желтый (yellow), зеленый (green))").trim().toLowerCase()

if (color === "красный" || color === "red") {
    console.log("Стоп (stop)")
} else if (color === "желтый" || color === "yellow") {
    console.log("Приготовься (Get ready)")
} else if (color === "зеленый" || color === "green") {
    console.log("Вперед (go)")
} else {
    alert("Введите корректно цвет светофора: (красный (red), желтый (yellow), зеленый (green))")
}


// 2 конвертер - вариант (switch case)

var numb = Number(prompt("Введите число от 1 до 9!"))

switch (numb) {
    case 1:
        alert("I")
        break
    case 2:
        alert("II")
        break
    case 3:
        alert("III")
        break
    case 4:
        alert("IV")
        break
    case 5:
        alert("V")
        break
    case 6:
        alert("VI")
        break
    case 7:
        alert("VII")
        break
    case 8:
        alert("VIII")
        break
    case 9:
        alert("IX")
        break
    default:
        alert("Введите корректно числа от 1 до 10!")
}

// вариант - (if else)

if (numb === 1) {
    alert("I")
} else if (numb === 2) {
    alert("II")
} else if (numb === 3) {
    alert("III")
} else if (numb === 4) {
    alert("IV")
} else if (numb === 5) {
    alert("V")
} else if (numb === 6) {
    alert("VI")
} else if (numb === 7) {
    alert("VII")
} else if (numb === 8) {
    alert("VIII")
} else if (numb === 9) {
    alert("IX")
} else {
    alert("Введите корректно числа от 1 до 10!")
}


// 3

var cardType = prompt("Введите тип карты: (SILVER, GOLD или PLATINUM): ");
var litersOfGas = parseFloat(prompt("Введите количество литров бензина: "));

if (cardType && litersOfGas) {
    cardType = cardType.toUpperCase();

    var points = 0;

    switch (cardType) {
        case "SILVER":
            points = litersOfGas * 0.5;
            break;
        case "GOLD":
            points = litersOfGas * 0.75;
            break;
        case "PLATINUM":
            points = litersOfGas * 1;
            break;
        default:
            console.log("Введите корректно тип карты");
            break;
    }

    console.log(`За ${litersOfGas} литров бензина с картой ${cardType} вы получите ${points} баллов.`);
} else {
    console.log("Введите корректные данные о типе карты и количестве литров бензина.");
}