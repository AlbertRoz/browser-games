import { root, contentMenu, headMenu, sidebarMenu } from "./main.js";
import { config } from "../config.js";

root.appendChild(contentMenu)
contentMenu.id = 'content'

export function createInput(type, text, name) {
    const input = document.createElement('input')
    input.type = type
    input.name = name
    input.placeholder = text

    return input
}

export function renderGamesCard(){
    alert('UI')
    const div = document.createElement('div')

    return div
}

export function renderSignIn(){

    const divForForm = document.createElement('div')
    divForForm.id = 'divForForm'
    const form = document.createElement('form')
    form.id = 'signin-signup'

    const emailInput = createInput('email', 'Email', 'email')
    const passwordInput = createInput('password', 'Password', 'password')

    const submitBtn = document.createElement('input')
    submitBtn.id = 'submitBtn'
    submitBtn.type = 'submit'
    submitBtn.value = 'Sign in!'

    form.appendChild(emailInput)
    form.appendChild(passwordInput)
    form.appendChild(submitBtn)
    divForForm.appendChild(form)

    return divForForm
}

export function renderSignUp(){
    
    const divForForm = document.createElement('div')
    divForForm.id = 'divForForm'
    const form = document.createElement('form')
    form.id = 'signin-signup'

    const emailInput = createInput('email', 'Email', 'email')
    const passwordInput = createInput('password', 'Password', 'password')
    const nameInput = createInput('name', 'Name', 'name')

    const submitBtn = document.createElement('input')
    submitBtn.id = 'submitBtn'
    submitBtn.type = 'submit'
    submitBtn.value = 'Sign up!'

    form.appendChild(emailInput)
    form.appendChild(passwordInput)
    form.appendChild(nameInput)
    form.appendChild(submitBtn)
    divForForm.appendChild(form)

    return divForForm
}

export function renderChat(){
    alert('UI')
    const div = document.createElement('div')

    return div
}

export function renderInfo(){
    alert('UI')
    const div = document.createElement('div')

    return div
}

export function renderRandomGame(){
    alert('UI')
    const div = document.createElement('div')

    return div
}

headMenu.addEventListener('click',(e) => {
    const {target} = e
    
    if(target instanceof HTMLAnchorElement){
        e.preventDefault()
        contentMenu.innerHTML = ''
        root.querySelector('.active').classList.remove('active')
        target.classList.add('active')

        const element = config.header[target.dataset.section].render()

        contentMenu.appendChild(element)
    }
})

sidebarMenu.addEventListener('click',(e) => {
    const {target} = e
    
    if(target instanceof HTMLAnchorElement){
        e.preventDefault()
        contentMenu.innerHTML = ''
        root.querySelector('.active').classList.remove('active')
        target.classList.add('active')

        const element = config.sidebar[target.dataset.section].render()

        contentMenu.appendChild(element)
    }
})