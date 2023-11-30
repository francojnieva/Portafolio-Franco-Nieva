const btnSubmit = document.querySelector('#btnSubmit')
const inputName = document.querySelector('#inputName')
const inputEmail = document.querySelector('#inputEmail')
const inputCase = document.querySelector('#inputCase')
const inputMessage = document.querySelector('#inputMessage')
const errorName = document.querySelector('.error-name')
const errorEmail = document.querySelector('.error-email')
const errorCase = document.querySelector('.error-case')
const errorMesagge = document.querySelector('.error-message')
const sendMessage = document.querySelector('#sendMessage')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputName.value === '') {
        errorName.textContent = 'Campo requerido.'
        return false
    } else {
        errorName.textContent = ''
    }

    if (inputName.value.length < 3 || inputName.value.length > 25) {
        errorName.textContent = 'El nombre debe tener entre 3 y 25 caracteres.'
        return false
    } else {
        errorName.textContent = ''
    }

    const emailRegex = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (!emailRegex.test(inputEmail.value.trim())) {
        errorEmail.textContent = 'Correo electrónico inválido.'
        return false
    } else if (inputEmail.value === '') {
        errorEmail.textContent = 'Campo requerido.'
        return false
    } else {
        errorEmail.textContent = ''
    }

    if (inputCase.value === '') {
        errorCase.textContent = 'Campo requerido.'
        return false
    } else {
        errorCase.textContent = ''
    }

    if (inputCase.value.length < 3 || inputName.value.length > 30) {
        errorCase.textContent = 'El asunto debe tener entre 3 y 30 caracteres.'
        return false
    } else {
        errorCase.textContent = ''
    }

    if (inputMessage.value === '') {
        errorMesagge.textContent = 'Campo requerido.'
        return false
    } else {
        errorMesagge.textContent = ''
    }

    if (inputMessage.value.length < 3 || inputMessage.value.length > 250) {
        errorMesagge.textContent = 'El mensaje debe tener entre 3 y 250 caracteres.'
        return false
    } else {
        errorMesagge.textContent = ''
    }

    sendMessage.textContent = 'Enviado. Muchas gracias.'

    inputName.value.textContent = ''
    inputEmail.value.textContent = ''
    inputCase.value.textContent = ''
    inputMessage.value.textContent = ''

    setTimeout(() => {
        const form = document.getElementById('form')
        sendMessage.textContent = ''
        form.submit()
    }, 2000)
})
