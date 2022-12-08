const buttonEl = document.querySelector('.change-color')
const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('.color')

buttonEl.addEventListener("click", onChangeColor)

function onChangeColor(event, color) {
  bodyEl.style.backgroundColor = getRandomHexColor()
  colorEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
