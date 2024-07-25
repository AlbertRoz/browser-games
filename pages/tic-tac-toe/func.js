export function checkWin(arrayField, winIndex1) {
    for (let i in winIndex1) {
        let win = true

        for (let j in winIndex1[i]) {
            let id = winIndex1[i][j]
            let ind = arrayField.indexOf(id)

            if (ind == -1) {
                win = false
            }
        }
        if (win) return true
    }
    return false
}
export function checkWin2(arrayField, winIndex2) {
    for (let i in winIndex2) {
        let win = true

        for (let j in winIndex2[i]) {
            let id = winIndex2[i][j]
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