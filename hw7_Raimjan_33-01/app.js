console.log('1 задание')

const numbers = [5,4,1,20,0, -4, -8, 100,4,-74,-5,0,0,1,2,7];

const umnNumb = numbers.map(number => number * 5);
console.log('Умноженные числа:', umnNumb);

const filtNumb = numbers.filter(number => number > 0);
console.log('Положительные числа:', filtNumb);

const maxNumb = numbers.reduce((max, number) => (number > max ? number : max), Number.NEGATIVE_INFINITY);
console.log('Максимальное число:', maxNumb);

const minNumber = numbers.reduce((min, number) => (number < min ? number : min), Number.POSITIVE_INFINITY);
console.log('Минимальное число:', minNumber);

//2

console.log('2 задание')

// Функция capitalize чтобы все имена начинались с заглавной буквы
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Функция translite с русского на латиницу
function translite(str) {
  const rus = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const lat = 'abvgdeejzijklmnoprstufhzcss_y_eua';
  return str.split('').map(char => {
    const index = rus.indexOf(char.toLowerCase());
    return index !== -1 ? (char === char.toUpperCase() ? lat[index].toUpperCase() : lat[index]) : char;
  }).join('');
}

const names = ["алиса","ЖЕНЯ","артем","ПАВЕЛ","ЖАКШЫЛЫК","антон","айсулуу", "канаим"];

// map: все имена начинались с заглавной буквы
const capitalizedNames = names.map(name => capitalize(name));
console.log('С заглавной буквы:', capitalizedNames);

// map: все имена на латинице
const latinNames = names.map(name => translite(name));
console.log('Латиница:', latinNames);

// filter: имена начинающиеся с буквы "А"
const namesStartingWithA = names.filter(name => name.charAt(0).toLowerCase() === 'а');
console.log('Начинающиеся с буквы "А":', namesStartingWithA);

// reduce: самое длинное имя
const longestName = names.reduce((longest, name) => name.length > longest.length ? name : longest, '');
console.log('Самое длинное имя:', longestName);

// reduce: самое короткое имя
const shortestName = names.reduce((shortest, name) => name.length < shortest.length ? name : shortest, names[0]);
console.log('Самое короткое имя:', shortestName);


