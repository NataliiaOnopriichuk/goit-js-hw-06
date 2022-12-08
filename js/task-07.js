
const inputFontControlEl  = document.querySelector('#font-size-control');
const spanTextEl  = document.querySelector('#text');

inputFontControlEl.addEventListener('input', changesText);

function changesText(event) {
spanTextEl.style.fontSize = `${event.currentTarget.value}px`

}