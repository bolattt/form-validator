const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2') 
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false;

function processFormData(e){
    e.preventDefault();
    // Validate Form
    validateForm();
}

function validateForm(){
    // Using Constraint API
    isValid = form.checkValidity();
    console.log(isValid)
}

// Event Listeners
form.addEventListener('submit',processFormData)
