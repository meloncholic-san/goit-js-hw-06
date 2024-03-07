const refs = {
    value: document.querySelector('#value'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;

function decrementBtnHandler() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

function incrementBtnHandler() {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', decrementBtnHandler);
refs.incrementBtn.addEventListener('click', incrementBtnHandler);
