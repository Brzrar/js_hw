// dz 4

// #1
var maskCard = (cardNumber, maskSymbol = "X") => {
  var visibleDigits = 6
  var lastVisibleDigits = 4
  var maskedDigits = cardNumber.length - visibleDigits - lastVisibleDigits

  var maskedSubstring = maskSymbol.repeat(maskedDigits)
  var visibleSubstring = cardNumber.slice(0, visibleDigits) + maskedSubstring + cardNumber.slice(-lastVisibleDigits)

  return visibleSubstring
}

console.log(maskCard("4815154823541789"))
console.log(maskCard("4815154823541789", "*"))

// 2

var cardType = prompt("Введите тип карты: (SILVER, GOLD или PLATINUM): ");
var litersOfGas = parseFloat(prompt("Введите количество литров бензина: "));
var calculatePoints = (cardType, liters) => {
    var points = 0;

    switch (cardType.toUpperCase()) {
        case "SILVER":
            points = liters * 0.5;
            break;
        case "GOLD":
            points = liters * 0.75;
            break;
        case "PLATINUM":
            points = liters * 1;
            break;
        default:
            points = 0;
            console.log("Error: Неверно указан тип карты.");
            break;
    }

    return points;
};

if (cardType && litersOfGas) {
    var totalPoints = calculatePoints(cardType, litersOfGas);
    cardType = cardType.toUpperCase();
    console.log(`За ${litersOfGas} литр бензина с картой ${cardType} вы получите ${totalPoints} баллов.`);
} else {
    console.log("Введите корректные данные о типе карты или количестве литров бензина.");
}
