var form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault()
    validator()
})

function validator() {
    validateUsername();
    validateEmail();
    validatePassword();
    let user = {"username": userName.value, "email": email.value, "password": password.value}
    console.log(user);
}

var userName = document.getElementById('validationServer01');
var email = document.getElementById('validationServer02');
var password = document.getElementById('validationServer03');


userName.addEventListener('blur', e => {
   validateUsername()
});

function validateUsername() {
    if (userName.value == '') {
        userName.classList.add('is-invalid');
    } else {
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid');
    }

}

email.addEventListener('blur', e => {
    validateEmail()
 });
 
 function validateEmail() {
    var msg = document.getElementById('validationServer02Feedback')
     if (email.value == '') {
        email.classList.add('is-invalid');
        msg.innerHTML = 'Email cannot be empty';
    } else if (!isEmail(email.value)) {
        email.classList.add('is-invalid');
        msg.innerHTML = 'Please Enter a Valid Email!';
    } else {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid')
        msg.innerHTML = '';
    }
 }

 function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3 }])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

password.addEventListener('blur', e => {
    validatePassword()
 });
 
 function validatePassword() {
    var msg = document.getElementById('validationServer03Feedback')
     if (password.value == '') {
        console.log(password.value);
        password.classList.add('is-invalid');
        msg.innerHTML = 'Password Check cannot be empty';
    } else if (password.value.length < 8 || password.value.length > 15) {
        password.classList.add('is-invalid');
        msg.innerHTML = "Password at least 8 characters and maximum of 15 characters";
    } else if (!isPassword(password.value)) {
        password.classList.add('is-invalid');
        msg.innerHTML = 'Please Enter a Valid Password!';
    } else {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid')
        msg.innerHTML = '';
    }
 }

 function isPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(password);
}