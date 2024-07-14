import { checkWin, changePlayer, restart, crtSt} from "./func/func.js"

const coice3x3 = document.getElementById('3x3')
const coice5x5 = document.getElementById('5x5')
const coice10x10 = document.getElementById('10x10')
const gameBlock = document.getElementById('cField');
const restartBtn = document.getElementById('res-btn');
const currantPlayer = document.getElementById('currP');
const checkNumX = document.getElementById('checkNumX');
const checkNumO = document.getElementById('checkNumO');
const checkNumXO = document.getElementById('checkNumXO');

coice3x3.onclick = function(){
    alert("Bogdan Petux")
}
coice5x5.onclick = function(){}
coice10x10.onclick = function(){}


let st = {
    'x': 0,
    'o': 0,
    'd': 0
}

for (let i = 1; i <= 9; i++) {
    gameBlock.innerHTML += '<div class="gameField" pos=' + i + '></div>'
}

const fields = document.getElementsByClassName('gameField');

let player = 'x';
currantPlayer.innerHTML = player.toUpperCase();

const winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

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

    if (checkWin(arrayField, winIndex)) {
        st[player] += 1;
        crtSt(checkNumX,checkNumO,checkNumXO,st);
        restart("победил " + player, fields,st);

    } else {
        let draw = true
        for (let i in fields) {
            if (fields[i].innerHTML == '') {
                draw = false;
            }
        }
        if (draw) {
            st.d += 1;
            crtSt(checkNumX,checkNumO,checkNumXO,st);
            restart('Ничья', fields,st);
        }
    }
    player = changePlayer(player);
    currantPlayer.innerHTML = player.toUpperCase();
}

restartBtn.onclick = function () {
    location.reload(true);
}