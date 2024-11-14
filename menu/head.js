import { root, headMenu } from "./main.js";
import { config } from "../config.js";

root.appendChild(headMenu)
headMenu.id = 'head'

const headerLeftContainer = document.createElement('div')
const headerRightContainer = document.createElement('div')
headerLeftContainer.id = 'left-cont'
headerRightContainer.id = 'right-cont'

headMenu.append(headerLeftContainer,headerRightContainer)

Object.entries(config.header).map(([key, { href, name }]) => {
    const headerContainer = document.createElement('div')
    headerContainer.className = 'header-cont'
    const headerElement = document.createElement('a')
    headerElement.href = href
    headerElement.textContent = name
    headerElement.dataset.section = key
    headerContainer.append(headerElement)

    return headerContainer
}).forEach((div) => {
    headerRightContainer.appendChild(div)
})