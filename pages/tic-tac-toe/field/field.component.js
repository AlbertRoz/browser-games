import { Field } from "../field/field.model.js";
import { store } from "/utils/store.js";

export class TheFieldComponent extends HTMLElement {


    constructor() {
        
        super();

        const modelId = this.getAttribute('model-id')
        /**это свойство содержит поле */
        this.field = store.get(modelId)
        this.render()

        this.querySelectorAll('[is-cell]')

        for(const elementCell of this.querySelectorAll('[is-cell]')){
            elementCell.addEventListener('click', (event)=>{
                event.target.getAttribute('cell-position')  
                const position = JSON.parse(event.target.getAttribute('cell-position'))
                console.log(position)

            })
        }
    }

    render() {
        this.innerHTML = ''
        for (const rowIndex in this.field.content) {
            const row = this.field.content[rowIndex]
            for (const cellIndex in row) {
                const cell = row[cellIndex]
                const cellPosition = {
                    y: rowIndex,
                    x: cellIndex,
                }
                this.innerHTML += `<div is-cell class="gameField" cell-position='${JSON.stringify(cellPosition)}'>${cell}</div>`

            }
        }

        this.innerHTML += `
            <style>  
                .one{
                    display: flex;
                    flex-wrap: wrap;
                    width: 310px;
                    margin-top: 30px;
                    gap: 5px;
                    background-color: #FFFAFA;
                    margin-bottom: 20px;
                }
                .two{
                    display: flex;
                    flex-wrap: wrap;
                    width: 415px;
                    margin-top: 30px;
                    gap: 5px;
                    background-color: #FFFAFA;
                    margin-bottom: 20px;
                }
                .three{
                    display: flex;
                    flex-wrap: wrap;
                    width: 520px;
                    margin-top: 30px;
                    gap: 5px;
                    background-color: #FFFAFA;
                    margin-bottom: 20px;
                }
                .gameField {
                    width: 100px;
                    height: 100px;
                    cursor: pointer;
                    font-size: 75px;
                    color: #FFFAFA;
                    background-color: #262626;
                }
            </style>
        `
    }
}

customElements.define('the-field', TheFieldComponent)
