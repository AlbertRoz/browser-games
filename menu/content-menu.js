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

    const contForCard = document.createElement('div')
    contForCard.id = 'contForCard'

    Object.entries(config.gameCard).map(([key, { href, name, image }]) =>{
        
        const divCardContainer = document.createElement('div')
        divCardContainer.id = 'divCardContainer'
        const imgCard = document.createElement('img')
        imgCard.id = 'imgForCard'
        const divContForPInCard = document.createElement('div')
        divContForPInCard.id = 'divContForPInCard'
        const textNameGame = document.createElement('p')
        textNameGame.id = 'textNameGame'
        imgCard.src = image
        textNameGame.textContent = name
        divCardContainer.href = href
        divCardContainer.dataset.section = key

        divCardContainer.appendChild(imgCard)
        divCardContainer.appendChild(divContForPInCard)
        divContForPInCard.appendChild(textNameGame)

        return divCardContainer
    })
    .forEach((div)=>{
        contForCard.appendChild(div)
    })

    return contForCard
}

export function renderSignIn(){

    const contForSignInAndSignUp = document.createElement('div')
    contForSignInAndSignUp.id = 'contForSignInAndSignUp'

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
    contForSignInAndSignUp.appendChild(divForForm)

    return contForSignInAndSignUp
}

export function renderSignUp(){
    
    const contForSignInAndSignUp = document.createElement('div')
    contForSignInAndSignUp.id = 'contForSignInAndSignUp'
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
    contForSignInAndSignUp.appendChild(divForForm)

    return contForSignInAndSignUp
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