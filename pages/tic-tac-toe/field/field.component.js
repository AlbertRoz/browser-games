import { store } from "/utils/store.js";

class TheFieldComponent extends HTMLElement {

    field

    constructor() {
        // Always call super first in constructor
        super();
        
        const modelId = this.getAttribute('model-id')
        this.field = store.get(modelId)
        this.render()
    }

    render(){
        for(const rowIndex in this.field.content){
            const row = this.field.content[rowIndex]
            for(const cellIndex in row){
                const cell = row[cellIndex]
                const cellPosition = {
                    y:rowIndex,
                    x:cellIndex,
                }
                this.innerHTML += `<div class="gameField" cell-position="${JSON.stringify(cellPosition)}">${cell}</div>`
            }
        }

        this.innerHTML+=`
            <style>  
                the-field {
                    display: flex;
                    flex-wrap: wrap;
                    width: 310px;
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
