const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
}

refs.inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.spanEl.textContent = event.currentTarget.value || 'Anonymous'
}