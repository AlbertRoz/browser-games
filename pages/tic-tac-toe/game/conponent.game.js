import { Field } from "../field/field.model.js";
import { store } from "../../../utils/store.js";

class SelectedGameComponent extends HTMLElement {

    #stage = 'select-game-mode'

    set stage(value) {
        this.#stage = value
        this.render()
    }
    get stage() {
        return this.#stage
    }

    players = {
        X: 'x',
        O: 'o'
    }
    currentPlayer = this.players.X

    constructor() {
        super()

        this.render()

        this.addEventListener('change-game-mode', (event) => {
            this.field = new Field(event.detail.height, event.detail.width)
            this.fieldId = '1'
            store.set(this.fieldId, this.field)
            this.stage = 'game'

        })


        this.addEventListener('input-cell', (event) => {
            this.field.setCell(event.detail, this.currentPlayer == this.players.X ? 'x' : 'o')
        })
    }

    render() {
        this.innerHTML = ''
        this.innerHTML += `
            ${this.stage === 'select-game-mode' && `<game-mode-menu></game-mode-menu>` || ''}

            ${this.stage === 'game' && `
                <div class="mainCont">
                    <div id="player-move" class="player-move">
                        <p>Ходит - <span id="currP">${this.currentPlayer}</span></p>
                    </div>

                ${this.field && `<the-field id="one" model-id="${this.fieldId}" class="one"></the-field>` || ''}

                    <div class="table-victories">
                        <p>Победа X - <span id="-player-win-X">0</span></p>
                        <p>Победа O - <span id="player-win-O">0</span></p>
                        <p>Ничья XO - <span id="player-win-XO">0</span></p>
                    </div>

                    <div class="contBtn"><button id="back-btn" class="btnBack">Назад</button></div>
                </div>
                ` || ''}
        `

        this.innerHTML += `
            <style>
                .player-move {
                    font-size: 40px;
                    color: aliceblue;
                }

                .table-victories {
                    margin-top: 10px;
                    color: #FFFAFA;
                    font-size: 30px;
                }
                
                .contBtn {
                    margin-top: 40px;
                }
                .btnBack {
                    background-color: #FFFAFA;
                    color: #262626;
                    font-weight: 700;
                    font-size: 30px;
                    border: solid 3px;
                    border-radius: 6px;
                    cursor: pointer;
                }
            </style>
        `
    }
}

customElements.define('the-game', SelectedGameComponent)