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

const signinLink = document.querySelector('[data-section="signin"]')
signinLink.addEventListener('click',(e)=>{
    e.preventDefault()

    root.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')

    const form = document.createElement('form')
    form.id = 'signin-signup'
    
    const emailInput = createInput('email','Email','email')
    const passwordInput = createInput('password','Password','password')

    const submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.value = 'Войти!'

    form.appendChild(emailInput)
    form.appendChild(passwordInput)
    form.appendChild(submitBtn)

    contentMenu.innerHTML = ''
    contentMenu.appendChild(form)
    
})

const signupLink = document.querySelector('[data-section="signup"]')
signupLink.addEventListener('click',(e)=>{
    e.preventDefault()

    root.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')

    const form = document.createElement('form')
    form.id = 'signin-signup'
    
    const emailInput = createInput('email','Email','email')
    const passwordInput = createInput('password','Password','password')
    const nameInput = createInput('name','Name','name')

    const submitBtn = document.createElement('input')
    submitBtn.type = 'submit'
    submitBtn.value = 'Регистрация!'

    form.appendChild(emailInput)
    form.appendChild(passwordInput)
    form.appendChild(nameInput)
    form.appendChild(submitBtn)

    contentMenu.innerHTML = ''
    contentMenu.appendChild(form)
})



const gamesLink = document.querySelector('[data-section="games"]')
gamesLink.addEventListener('click', (e) =>{
    e.preventDefault();

    root.querySelector('.active').classList.remove('active')
    e.target.classList.add('active')


    contentMenu.innerHTML = ''
})