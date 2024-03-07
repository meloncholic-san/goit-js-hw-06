function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('span.color');
const buttonRef = document.querySelector('.change-color');


function buttonClickHandler(){
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
}

buttonRef.addEventListener('click', buttonClickHandler);
