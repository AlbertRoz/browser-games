import { store } from "../../../utils/store.js";
import { Field } from "../field/field.model.js";

const game3x3 = document.getElementById('gameSating3x3');
const game4x4 = document.getElementById('gameSating4x4');
const game5x5 = document.getElementById('gameSating5x5');
const modeMenu = document.querySelector('game-mode-menu')

game3x3.addEventListener('click', startGame3x3)
game4x4.addEventListener('click', startGame4x4)
game5x5.addEventListener('click', startGame5x5)

function startGame3x3() {
    modeMenu.innerHTML+= `<style>game-mode-menu{display: none;}</style>`
    document.getElementById('ConGame').innerHTML = '<selected-game></selected-game>'
    const field = new Field(3, 3)
    store.set('1',field)
    document.getElementById('field-placement-anchore').innerHTML = '<the-field model-id="1" class="one"></the-field>'

    const backBtn = document.getElementById('back-btn');

    backBtn.onclick = function () {
        location.reload(true);
    }
}
// не работает 
function startGame4x4() {
    modeMenu.innerHTML+= `<style>game-mode-menu{display: none;}</style>`
    document.getElementById('ConGame').innerHTML = '<selected-game></selected-game>'
    const field = new Field(4, 4)
    store.set('2',field)
    document.getElementById('field-placement-anchore').innerHTML = '<the-field model-id="2" class="two"></the-field>'

    const backBtn = document.getElementById('back-btn');

    backBtn.onclick = function () {
        location.reload(true);
    }
}
// не работает 
function startGame5x5() {
    modeMenu.innerHTML+= `<style>game-mode-menu{display: none;}</style>`
    document.getElementById('ConGame').innerHTML = '<selected-game></selected-game>'
    const field = new Field(5, 5)
    store.set('3',field)
    document.getElementById('field-placement-anchore').innerHTML = '<the-field model-id="3" class="three"></the-field>'

    const backBtn = document.getElementById('back-btn');

    backBtn.onclick = function () {
        location.reload(true);
    }
}