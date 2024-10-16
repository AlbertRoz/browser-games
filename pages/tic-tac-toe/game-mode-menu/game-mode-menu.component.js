class GameModeMenuComponent extends HTMLElement {



    constructor() {
        // Always call super first in constructor
        super();
        
        this.render()
        this.querySelector('#gameSating3x3').addEventListener('click', (event)=> {
            let costomEvent = new CustomEvent('change-game-mode', {bubbles: true, detail:{height:3,width:3}})
            this.dispatchEvent(costomEvent)
        })
        this.querySelector('#gameSating4x4').addEventListener('click', (event)=> {
            let costomEvent = new CustomEvent('change-game-mode', {bubbles: true, detail:{height:5,width:5}})
            this.dispatchEvent(costomEvent)
        })
        this.querySelector('#gameSating5x5').addEventListener('click', (event)=> {
            let costomEvent = new CustomEvent('change-game-mode', {bubbles: true, detail:{height:5,width:5}})
            this.dispatchEvent(costomEvent)
        })
    }

    render() {
        this.innerHTML = ''
        this.innerHTML += `<div id="gameSating3x3" class="contCardInfo3x3"><p class="textInfoChoice3x3">3x3</p></div>`
        this.innerHTML += `<div id="gameSating4x4" class="contCardInfo4x4"><p class="textInfoChoice4x4">4x4</p></div>`
        this.innerHTML += `<div id="gameSating5x5" class="contCardInfo5x5"><p class="textInfoChoice5x5">5x5</p></div>`



        this.innerHTML += `
            <style>
                game-mode-menu{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap:10px;
                }
                .contCardInfo3x3 {
                    cursor: pointer;
                    width: 250px;
                    height: 250px;
                    border: #FFFAFA solid 1px ;
                    display: flex;
                    justify-content: center;
                    margin: 20px 5px;
                    border-radius: 10px;
                }
                .contCardInfo4x4 {
                    cursor: pointer;
                    width: 250px;
                    height: 250px;
                    border: #FFFAFA solid 1px ;
                    display: flex;
                    justify-content: center;
                    margin: 20px 5px;
                    border-radius: 10px;
                }
                .contCardInfo5x5 {
                    cursor: pointer;
                    width: 250px;
                    height: 250px;
                    border: #FFFAFA solid 1px ;
                    display: flex;
                    justify-content: center;
                    margin: 20px 5px;
                    border-radius: 10px;
                }
                .textInfoChoice3x3 {
                    margin: auto;
                    font-size: 60px;
                    color: #FFFAFA;
                    cursor: pointer;
                }
                .textInfoChoice4x4 {
                    margin: auto;
                    font-size: 60px;
                    color: #FFFAFA;
                    cursor: pointer;
                }
                .textInfoChoice5x5 {
                    margin: auto;
                    font-size: 60px;
                    color: #FFFAFA;
                    cursor: pointer;
                }
                .contCardInfo3x3:hover {
                    transition: 0.3s;
                    transform: scale(1.1);
                    font-size: 90px;
                    border-color:#008000
                }
                .contCardInfo4x4:hover {
                    transition: 0.3s;
                    transform: scale(1.1);
                    font-size: 90px;
                    border-color:#FFFF00
                }
                .contCardInfo5x5:hover {
                    transition: 0.3s;
                    transform: scale(1.1);
                    font-size: 90px;
                    border-color:#FFA500
                }
                .textInfoChoice3x3:hover {
                    transform: scale(1.1);
                    font-size: 90px;
                    color: #008000;
                }
                .textInfoChoice4x4:hover {
                    transform: scale(1.1);
                    font-size: 90px;
                    color: #FFFF00;
                }    
                .textInfoChoice5x5:hover {
                    transform: scale(1.1);
                    font-size: 90px;
                    color: #FFA500;
                }        
            </style>
        `
    }
}

customElements.define('game-mode-menu', GameModeMenuComponent)
