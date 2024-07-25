import { checkWin,checkWin2, changePlayer, restart, crtSt } from "./func.js"

const contentContainer = document.getElementById('contentCont');

const tempMenuTTT = document.getElementById('cardSetings');
let divCardSeting = tempMenuTTT.content.querySelector('div');
let textCardSeting = tempMenuTTT.content.querySelector('p');

divCardSeting.id = '3x3';
textCardSeting.textContent = '3x3';
let cloneCardSeting = tempMenuTTT.content.cloneNode(true);
contentContainer.append(cloneCardSeting);

divCardSeting.id = '6x6';
textCardSeting.textContent = '6x6';
cloneCardSeting = tempMenuTTT.content.cloneNode(true);
contentContainer.append(cloneCardSeting);

const gameOn3x3 = document.getElementById('3x3');
const gameOn6x6 = document.getElementById('6x6');

gameOn3x3.addEventListener('click', switchOnOff3x3);
gameOn6x6.addEventListener('click', switchOnOff6x6);
const gameBlock = document.getElementById('cField');

function switchOnOff3x3() {
    gameOn3x3.classList.toggle('off');
    gameOn6x6.classList.toggle('off');

    renderingFields3x3();
    gameOn1();
}

function switchOnOff6x6() {
    gameOn3x3.classList.toggle('off');
    gameOn6x6.classList.toggle('off');
    gameBlock.classList.toggle('two');

    renderingFields6x6();
    gameOn2();
}

function renderingFields3x3() {
    const gameBlock = document.getElementById('cField');

    for (let i = 1; i <= 9; i++) {
        gameBlock.innerHTML += '<div class="gameField" pos=' + i + '></div>'
    }
}
function renderingFields6x6() {
    const gameBlock = document.getElementById('cField');

    for (let i = 1; i <= 36; i++) {
        gameBlock.innerHTML += '<div class="gameFieldTwo" pos=' + i + '></div>'
    }
}


const restartBtn = document.getElementById('res-btn');
const currantPlayer = document.getElementById('currP');
const checkNumX = document.getElementById('checkNumX');
const checkNumO = document.getElementById('checkNumO');
const checkNumXO = document.getElementById('checkNumXO');

let st = {
    'x': 0,
    'o': 0,
    'd': 0
}

let player = 'x';
currantPlayer.innerHTML = player.toUpperCase();

const winIndex1 = [
    // horizontally
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // vertically
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    // obliquely
    [1, 5, 9],
    [3, 5, 7]
]
const winIndex2 = [
    // horizontally
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    // vertically
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],
    [6, 12, 18, 24, 30, 36],
    // obliquely
    [1, 8, 15, 22, 29, 36],
    [6, 11, 16, 21, 26, 31]
]

function gameOn1(){
    const fields = document.getElementsByClassName('gameField');

    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('click', fieldClick, false);
    }

    function fieldClick() {
        console.log('123');
    
        let arrayField = []
    
        if (this.innerHTML === '') {
            this.innerHTML = player;
        } else {
            return;
        }
    
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].innerHTML == player) {
                arrayField.push(parseInt(fields[i].getAttribute('pos')))
            }
            console.log(arrayField)
        }
    
        if (checkWin(arrayField, winIndex1)) {
            st[player] += 1;
            crtSt(checkNumX, checkNumO, checkNumXO, st);
            restart("победил " + player, fields, st);
    
        } else {
            let draw = true
            for (let i in fields) {
                if (fields[i].innerHTML == '') {
                    draw = false;
                }
            }
            if (draw) {
                st.d += 1;
                crtSt(checkNumX, checkNumO, checkNumXO, st);
                restart('Ничья', fields, st);
            }
        }
        player = changePlayer(player);
        currantPlayer.innerHTML = player.toUpperCase();
    }
}
function gameOn2(){
    const fields = document.getElementsByClassName('gameFieldTwo');

    for (let i = 0; i < fields.length; i++) {
        fields[i].addEventListener('click', fieldClick, false);
    }

    function fieldClick() {
        console.log('123');
    
        let arrayField = []
    
        if (this.innerHTML === '') {
            this.innerHTML = player;
        } else {
            return;
        }
    
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].innerHTML == player) {
                arrayField.push(parseInt(fields[i].getAttribute('pos')))
            }
            console.log(arrayField)
        }
    
        if (checkWin2(arrayField, winIndex2)) {
            st[player] += 1;
            crtSt(checkNumX, checkNumO, checkNumXO, st);
            restart("победил " + player, fields, st);
    
        } else {
            let draw = true
            for (let i in fields) {
                if (fields[i].innerHTML == '') {
                    draw = false;
                }
            }
            if (draw) {
                st.d += 1;
                crtSt(checkNumX, checkNumO, checkNumXO, st);
                restart('Ничья', fields, st);
            }
        }
        player = changePlayer(player);
        currantPlayer.innerHTML = player.toUpperCase();
    }
}

restartBtn.onclick = function () {
    location.reload(true);
}