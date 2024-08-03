
function checkRollInField(field,position){
    const horizontalCells = []
    const verticalCells = []
    const obliquelyLeftRightCells = []
    const obliquelyRightLeftCells = []

    for(const cellsHorizont of field[position.y]){
        horizontalCells.push(cellsHorizont)
    }

    for(const row of field){
        verticalCells.push(row[position.x])
    }

    let pointer = position
    while(true){
        const nextPosition = {
            x: pointer.x -1,
            y: pointer.y -1
        }
        if(field[nextPosition.y] === undefined) break
        if(field[nextPosition.y][nextPosition.x] === undefined) break

        pointer = nextPosition
        obliquelyLeftRightCells.unshift(field[nextPosition.y][nextPosition.x])
    }
    pointer = position
    obliquelyLeftRightCells.push(field[position.y][position.x])
    while (true){
        const nextPosition = {
            x: pointer.x +1,
            y: pointer.y +1
        }
        if(field[nextPosition.y] === undefined) break
        if(field[nextPosition.y][nextPosition.x] === undefined) break

        pointer = nextPosition
        obliquelyLeftRightCells.push(field[nextPosition.y][nextPosition.x])
    }

    pointer = position
    while(true){
        const nextPosition = {
            x: pointer.x +1,
            y: pointer.y -1
        }
        if(field[nextPosition.y] === undefined) break
        if(field[nextPosition.y][nextPosition.x] === undefined) break

        pointer = nextPosition
        obliquelyRightLeftCells.unshift(field[nextPosition.y][nextPosition.x])
    }
    pointer = position
    obliquelyRightLeftCells.push(field[position.y][position.x])
    while (true){
        const nextPosition = {
            x: pointer.x -1,
            y: pointer.y +1
        }
        if(field[nextPosition.y] === undefined) break
        if(field[nextPosition.y][nextPosition.x] === undefined) break

        pointer = nextPosition
        obliquelyRightLeftCells.push(field[nextPosition.y][nextPosition.x])
    }
}