const inputRef = document.querySelector('#validation-input');
function inputCheckHandler(){
    const enteredText = this.value;
    const requiredTextLength = this.dataset.length;
    if (enteredText.length == parseInt(requiredTextLength)){
        this.classList.add('valid');
        this.classList.remove('invalid');

    }else {
        this.classList.add('invalid');
        this.classList.remove('valid');
    }
};
// працює без bind відмінно, але в минулому випадку hw-05, при такій же самій передачі колбек функції inputCheckHandler, this у ній не посилається на контекст "inputRef".
// inputRef.addEventListener('input',inputCheckHandler); також працює, якщо відстежуємо input, а не blur, візуально ніякої різниці немає, чому так? 
// хіба не ка кожне натискання клавіші ми повінні бачити загорання border`a червоним, чи зеленим?
inputRef.addEventListener('blur',inputCheckHandler);
