export function checkWin(arrayField, winIndex) {
    for (let i in winIndex) {
        let win = true

        for (let j in winIndex[i]) {
            let id = winIndex[i][j]
            let ind = arrayField.indexOf(id)

            if (ind == -1) {
                win = false
            }
        }
        if (win) return true
    }
    return false
}

export function restart(text, fields, st) {
    alert(text);
    console.log(st);
    for (let i = 0; i < fields.length; i++) {
        fields[i].innerHTML = ''
    }
}

export function crtSt(checkNumX,checkNumO,checkNumXO,st){
    checkNumX.innerHTML = st.x;
    checkNumO.innerHTML = st.o;
    checkNumXO.innerHTML = st.d;
}

export function changePlayer(player) {
    if (player == 'x') {
        return 'o';
    } else {
        return 'x'
    }
}