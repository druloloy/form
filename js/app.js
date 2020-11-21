const FormValidator = {
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    email: document.querySelector('#email'),
    contact: document.querySelector('#contact'),
    birthday: document.querySelector('#birthday'),
    password: document.querySelector('#password'),
    terms: document.querySelector('#terms')
}

FormValidator.firstName.addEventListener('focusin',(e)=>{
    e.target.style.background = "black";
});
FormValidator.firstName.addEventListener('focusout',(e)=>{
    e.target.style.background = "none";
});