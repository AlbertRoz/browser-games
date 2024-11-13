import { root, contentMenu } from "./main.js";

root.appendChild(contentMenu)
contentMenu.id = 'content'

export function createInput(type, text, name) {
    const input = document.createElement('input')
    input.type = type
    input.name = name
    input.placeholder = text

    return input
}

const loginLink = document.querySelector('[data-section="login"]')
loginLink.addEventListener('click',(e)=>{
    e.preventDefault()

    root.querySelector('.active').classList.remove('active')
    loginLink.classList.add('active')

    const form = document.createElement('form')
    
    const emailInput = createInput('email','Email','email')
    const passwordInput = createInput('password','Password','password')

    const submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.value = 'Войти!'

    form.appendChild(emailInput)
    form.appendChild(passwordInput)
    form.appendChild(submitBtn)

    contentMenu.appendChild(form)
    
})

const gamesLink = document.querySelector('[data-section="games"]')
gamesLink.addEventListener('click', (e) =>{
    e.preventDefault();

    root.querySelector('.active').classList.remove('active')
    gamesLink.classList.add('active')
})