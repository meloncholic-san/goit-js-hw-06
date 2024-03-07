const formRef = document.querySelector('.login-form');

function buttonSubmitHandler(event){
    event.preventDefault();
    const formElements = event.target.elements;
    const formEmail = formElements.email;
    const formPassword = formElements.password;

    formEmail.required = true;
    formPassword.required = true;
    
    if (!event.target.checkValidity()){
       return alert("Всі поля повинні бути заповненні!");
    }
        console.log(`${formEmail.name}: ${formEmail.value}`);
        console.log(`${formPassword.name}: ${formPassword.value}`);
        event.target.reset();
    // if (formEmail.value === "" || formPassword.value === ""){
    //     alert("Всі поля повинні бути заповненні!");
    //     }
    // так alert буде з'являтись кожного разу, але не буде фрази "заповніть це поле" на пустому полі пароля або пошти.
};

formRef.addEventListener('submit', buttonSubmitHandler);