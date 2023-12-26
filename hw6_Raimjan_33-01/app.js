const generateButton = document.getElementById('generateButton');
generateButton.addEventListener('click', generateNumbers);

function generateNumbers() {
  const numbersDiv = document.getElementById('numbers');
  numbersDiv.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const number = getRandomTwoDigitNumber();
    const circle = document.createElement('div');
    circle.style.width = '80px';
    circle.style.height = '80px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    circle.style.color = 'white';
    circle.style.fontSize = '25px';
    circle.style.display = 'inline-flex';
    circle.style.justifyContent = 'center';
    circle.style.alignItems = 'center';
    circle.style.margin = '5px';
    circle.style.marginTop = '11px';
    circle.textContent = number;
    numbersDiv.appendChild(circle);
  }
}

function getRandomTwoDigitNumber() {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  return randomNumber < 10 ? `0${randomNumber}` : `${randomNumber}`;
}
