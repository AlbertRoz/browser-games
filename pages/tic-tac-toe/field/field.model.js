
export class Field {
    emmitter = new EventTarget

    content

    constructor(rowsNumber, columnsNumber) {
        this.content = new Array(rowsNumber).fill(new Array(columnsNumber).fill(' '))
    }

    setCell(position, nextValue) {
        if(this.content[position.y] === undefined) throw new Error('Invalid action. Overflow position.')

        else if(this.content[position.y][position.x] === undefined) throw new Error('Invalid action. Overflow position.')

        const previousValue = this.content[position.y][position.x]
    
        if (previousValue !== ' ') throw new Error('Invalid action. The cell is already filed.')
    
        this.content[position.y][position.x] = nextValue
    }
}
