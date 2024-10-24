
export class Field {
    // what this ?
    // emmitter = new EventTarget


    constructor(rowsNumber, columnsNumber) {
        this.content = new Array(rowsNumber).fill(new Array(columnsNumber).fill(''))

    }

    validate(field,position){
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

    setCell(position, nextValue) {
        if(this.content[position.y] === undefined) throw new Error('Invalid action. Overflow position.')

        else if(this.content[position.y][position.x] === undefined) throw new Error('Invalid action. Overflow position.')

        const previousValue = this.content[position.y][position.x]
    
        if (previousValue !== '') throw new Error('Invalid action. The cell is already filed.')
    
        this.content[position.y][position.x] = nextValue
    }
}