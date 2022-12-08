const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkLengthInput)

function checkLengthInput(event) {
    const inputAttribute = inputEl.getAttribute('data-length');
    inputEl.classList.add('invalid');

 if (Number(inputAttribute) === event.currentTarget.value.length) {
    inputEl.classList.replace('invalid', 'valid');
}
}

