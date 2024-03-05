const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// додавання до DOM не однією операцією!
// const ingridientsListRef = document.querySelector('#ingredients');
// [...ingredients].forEach(ingridient => {;
//   const ingedientElem = document.createElement("li");
//   ingedientElem.textContent = ingridient;
//   ingedientElem.classList.add('item');
//   ingridientsListRef.appendChild(ingedientElem);
// });
// якщо потрібно огорнути функцією (хоча навіщо), то -> -> -> 
function createIngredients() {
  const ingridientsListRef = document.querySelector('#ingredients');
  const ingridientsArray = [];

  [...ingredients].forEach(ingridient => {
  const ingedientElem = document.createElement("li");

  ingedientElem.textContent = ingridient;
  ingedientElem.classList.add('item');
  ingridientsArray.push(ingedientElem);
});
  ingridientsListRef.append(...ingridientsArray);
}
createIngredients();