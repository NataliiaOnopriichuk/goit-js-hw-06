const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}
console.log(refs.inputEl);
console.log(refs.spanEl);

refs.inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.spanEl.textContent = event.currentTarget.value || 'Anonymous'
}