const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

function inputHandler(event){
    this.output.textContent = event.currentTarget.value;
    if(event.currentTarget.value === ""){
        this.output.textContent = "Anonymous";
    }
};
// Чомусь не працює без bind. Наскільки я розумію, то при виклику addEventListener this буде в контексті refs.input, отже this вказує на нього.
// Але якщо прибрати з inputHandler.bind(refs) bind, то функція не працює як очікується. 
// В task-06 з такою проблемою не зіштовхнувся, чи можете підказати, чому відбувається така реакція?
refs.input.addEventListener('input', inputHandler.bind(refs));