function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainerRef.innerHTML = '';
 for (let i = 0, px = 0; i < amount; i +=1, px += 10) {
  const boxWidth = 30 + px;
  const boxHeight = 30 + px;
  const divElement = document.createElement('div');
  divElement.style.width = `${boxWidth}px`;
  divElement.style.height = `${boxHeight}px`;
  divElement.style.margin = '5px';
  divElement.style.backgroundColor = getRandomHexColor();
  boxesContainerRef.appendChild(divElement);
 }
};

function destroyBoxes(){
  boxesContainerRef.innerHTML = '';
  inputNumberRef.value = "";
};

function inputNumberHandler(event) {
  const amount = event.target.value;
  buttonCreateRef.removeEventListener('click', buttonCreateHandler); 
  buttonDestroyRef.removeEventListener('click', buttonDestroyHandler); 
  buttonCreateRef.addEventListener('click', () => buttonCreateHandler(amount));
  buttonDestroyRef.addEventListener('click', buttonDestroyHandler);
  //єдине що у мене не вийшло - це видалити прослуховування на кнопці Create. Наскільки я розумію, це не правцює зі стрілочними функціями, бо передається не за посиланням
  //тож я намагався створити додаткову функцію, яка б викликала buttonCreateHandler(amount), але все ломалося таким чином
  // виходило якось так: buttonCreateRef.addEventListener('click', createDiv); де function createDiv() {buttonCreateHandler(amount)};
  // але при видаленні прослуховування buttonCreateRef.removeEventListener('click', createDiv); не спрацьовувала. Чи можно це якось полагодити?
  // Якщо визивати buttonCreateRef.removeEventListener('click', () => buttonCreateHandler(amount)); то починає реагувати саме на інпут, а не натискання
}
function buttonCreateHandler(amount) {
  createBoxes(amount);

};

function buttonDestroyHandler(){
  destroyBoxes();
};

const inputNumberRef = document.querySelector('input[type = "number"]');
const boxesContainerRef = document.querySelector('#boxes');
// boxesContainerRef.style.display = 'flex';
const buttonCreateRef = document.querySelector('[data-create]');
const buttonDestroyRef = document.querySelector('[data-destroy]');


inputNumberRef.addEventListener('input', inputNumberHandler);
