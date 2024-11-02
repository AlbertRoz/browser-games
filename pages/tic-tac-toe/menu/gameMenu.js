class GameMenu extends HTMLElement {

    constructor() {
        super();

        this.render()

        this.querySelector('#choiceField3x3').addEventListener('click', (event) => {
            console.log('report1')
            let customEvent = new CustomEvent('change-game-mode', {bubbles:true, detail:{height:3,width:3}})
            this.dispatchEvent(customEvent) 
        })
        this.querySelector('#choiceField4x4').addEventListener('click', (event) => {
            console.log('report2')
            let customEvent = new CustomEvent('change-game-mode', {bubbles:true, detail:{height:4,width:4}})
            this.dispatchEvent(customEvent) 
        })
        this.querySelector('#choiceField5x5').addEventListener('click', (event) => {
            console.log('report3')
            let customEvent = new CustomEvent('change-game-mode', {bubbles:true, detail:{height:5,width:5}})
            this.dispatchEvent(customEvent) 
        })
    }

    render() {
        this.innerHTML = ''
        this.innerHTML += `
        <h1 class="nameMenu">выбор поля</h1>
        <div class="containerCardsChoice">
            <div id="choiceField3x3" class="choiceField"><p>3x3</p></div>
            <div id="choiceField4x4" class="choiceField"><p>4x4</p></div>
            <div id="choiceField5x5" class="choiceField"><p>5x5</p></div>
        </div>`
    }
}

customElements.define('the-game', GameMenu)
