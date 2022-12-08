
const divEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
console.log(inputEl);


inputEl.addEventListener('input', onGetNumber);
buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function onGetNumber(event) {
  const number = +inputEl.value;
  return number;
}


function createBoxes(amount) {
let step = 0
  for (let i = 0; i < onGetNumber(); i+=1) {
    const element = i;
    const newElement = document.createElement(`div`)
    newElement.style.backgroundColor = getRandomHexColor()
    newElement.style.width = `${30 + step}px`
    newElement.style.height = `${30 + step}px`
    step+=10
    divEl.append(newElement)
  }
}

function destroyBoxes(event) {
  console.log(inputEl.value);
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
