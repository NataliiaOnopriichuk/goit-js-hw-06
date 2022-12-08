
const categoriesListEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesListEl.length}`);

categoriesListEl.forEach(elem => {
    const titleEl = elem.firstElementChild;
    console.log(`Category: ${titleEl.textContent}`);

    const listEl = elem.lastElementChild.children;
    console.log(`Elements: ${listEl.length}`);
})