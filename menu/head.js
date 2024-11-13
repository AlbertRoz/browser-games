import { root, headMenu } from "./main.js";
import { config } from "../config.js";

root.appendChild(headMenu)
headMenu.id = 'head'

// Object.entries(config.header).map(([key, { href, name }]) => {
//     const logoText = document.createElement('h1')
//     logoText.id = 'logoText'
//     logoText.href = href
//     logoText.textContent = name
//     logoText.dataset.saction = key

//     return logoText
// }).forEach((h1) => {
//     headMenu.appendChild(h1)
// })