import { config } from "../config.js";
import { root, sidebarMenu } from "./main.js";

root.appendChild(sidebarMenu)
sidebarMenu.id = 'sidebar'

Object.entries(config.sidebar).map(([key, { href, name }], index) => {

    const sidebarContainer = document.createElement('div')
    sidebarContainer.className = 'sidebar-cont'
    const sidebarElement = document.createElement('a')
    sidebarElement.href = href
    sidebarElement.textContent = name
    sidebarElement.dataset.section = key
    sidebarContainer.append(sidebarElement)

    if(index === 0){
        sidebarElement.classList.add('active')
    }
    
    return sidebarContainer
}).forEach((div) => {
    sidebarMenu.appendChild(div)
})