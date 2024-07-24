import { checkWin, changePlayer, restart, crtSt} from "./func.js"

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

divCardSeting.id = '9x9';
textCardSeting.textContent = '9x9';
cloneCardSeting = tempMenuTTT.content.cloneNode(true);
contentContainer.append(cloneCardSeting);


const gameOn3x3 = document.getElementById('3x3');
const gameOn6x6 = document.getElementById('6x6');
const gameOn9x9 = document.getElementById('9x9');

gameOn3x3.addEventListener('click', switchOnOff3x3, true)

function switchOnOff3x3(){
    gameOn3x3.classList.toggle('off')
    gameOn6x6.classList.toggle('off')
    gameOn9x9.classList.toggle('off')

    renderingFields3x3();
    gameOn1();
}

function renderingFields3x3(){
    const gameBlock = document.getElementById('cField');

    for (let i = 1; i <= 9; i++) {
        gameBlock.innerHTML += '<div class="gameField" pos=' + i + '></div>'
    }
}

function gameOn1(){

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
}

