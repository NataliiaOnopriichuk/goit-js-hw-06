const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSendForm);


function onSendForm(event) {
    event.preventDefault()

    let { email, password } = event.currentTarget.elements;
    email = email.value;
    password = password.value;
   if (!email || !password){
    alert(`Всі поля повинні бути заповнені`)
   } else {
    const dataForm = {email, password}
    console.log(dataForm);
    event.currentTarget.reset()
   }
}

