const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('#ingredients');

const elements = ingredients.map(elem => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = elem;

  return itemEl
})

listEl.append(...elements)


