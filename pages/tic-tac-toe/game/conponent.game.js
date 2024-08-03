class SelectedGameComponent extends HTMLElement {

    constructor() {
        super();

        this.render()
    }
    
    render(){

        this.innerHTML += `
            <div class="mainCont">
                <div id="player-move" class="player-move">
                    <p>Ходит - <span id="currP"></span></p>
                </div>

                <div id="field-placement-anchore"></div>

                <div class="table-victories">
                    <p>Победа X - <span id="-player-win-X">0</span></p>
                    <p>Победа O - <span id="player-win-O">0</span></p>
                    <p>Ничья XO - <span id="player-win-XO">0</span></p>
                </div>

                <div class="contBtn"><button id="back-btn" class="btnBack">Назад</button></div>
            </div>
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

customElements.define('selected-game', SelectedGameComponent)