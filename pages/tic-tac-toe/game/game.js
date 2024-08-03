import { store } from "../../../utils/store.js";
import { Field } from "../field/field.model.js";
import { } from "../field/func.js"

const game3x3 = document.getElementById('gameSating3x3');
const game4x4 = document.getElementById('gameSating4x4');
const game5x5 = document.getElementById('gameSating5x5');
const modeMenu = document.querySelector('game-mode-menu')

game3x3.addEventListener('click', switchOn3x3)
game4x4.addEventListener('click', switchOn4x4)
game5x5.addEventListener('click', switchOn5x5)

function switchOn3x3() {
    modeMenu.innerHTML+= `<style>game-mode-menu{display: none;}</style>`
    const field = new Field(3, 3)
    store.set('1',field)
    document.getElementById('field-placement-anchore').innerHTML = '<the-field model-id="1"></the-field>'
}
function switchOn4x4() {
    modeMenu.innerHTML+= `<style>game-mode-menu{display: none;}</style>`
    const field = new Field(4, 4)
    store.set('2',field)
    document.getElementById('field-placement-anchore').innerHTML = '<the-field model-id="2"></the-field>'
}
function switchOn5x5() {
    modeMenu.innerHTML+= `<style>game-mode-menu{display: none;}</style>`
    const field = new Field(5, 5)
    store.set('3',field)
    document.getElementById('field-placement-anchore').innerHTML = '<the-field model-id="3"></the-field>'
}

const restartBtn = document.getElementById('res-btn');

restartBtn.onclick = function () {
    location.reload(true);
}