class GameModeMenuComponent extends HTMLElement {



    constructor() {
        // Always call super first in constructor
        super();
        
        this.render()
    }

    render() {

        this.innerHTML += `<div id="gameSating3x3" class="contCardInfo"><p class="textInfoChoice">3x3</p></div>`
        this.innerHTML += `<div id="gameSating4x4" class="contCardInfo"><p class="textInfoChoice">4x4</p></div>`
        this.innerHTML += `<div id="gameSating5x5" class="contCardInfo"><p class="textInfoChoice">5x5</p></div>`


        this.innerHTML += `
            <style>
                game-mode-menu{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap:10px;
                }
                .contCardInfo {
                    cursor: pointer;
                    width: 250px;
                    height: 250px;
                    border: #FFFAFA solid 1px ;
                    display: flex;
                    justify-content: center;
                    margin: 20px 5px;
                    border-radius: 10px;
                }
                .textInfoChoice {
                    margin: auto;
                    font-size: 60px;
                    color: #FFFAFA;
                    cursor: pointer;
                }
                .contCardInfo:hover {
                    transition: 0.3s;
                    transform: scale(1.1);
                    font-size: 90px;
                    border-color:#ff0000
                }
                .textInfoChoice:hover {
                    transform: scale(1.1);
                    font-size: 90px;
                }    
            </style>
        `
    }
}

customElements.define('game-mode-menu', GameModeMenuComponent)
