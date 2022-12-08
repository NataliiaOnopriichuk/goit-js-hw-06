
const elem = {
decrementButtonValue: document.querySelector('button[data-action="decrement"]'),
incrementButtonValue: document.querySelector('button[data-action="increment"]'),
valueEl: document.querySelector('#value'),
}

elem.incrementButtonValue.addEventListener('click', addValue);
elem.decrementButtonValue.addEventListener('click', removeValue);

let counterValue = 0

function addValue() {
   counterValue += 1
   elem.valueEl.textContent = counterValue
}

function removeValue () {
    counterValue -= 1
    elem.valueEl.textContent = counterValue
 }



