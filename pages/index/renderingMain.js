const contentContainer = document.getElementById('contentCont');

const tempCardGames = document.getElementById('cardGames');
let divCardCont = tempCardGames.content.querySelector('div');
let imgCard = tempCardGames.content.querySelector('img');
let spanNameCard = tempCardGames.content.querySelector('span');


divCardCont.id = 'card-1';
imgCard.src = 'tictactoe.png';
spanNameCard.textContent = 'Tic-Tac-Toe';
let cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

divCardCont.id = 'card-2';
imgCard.src = 'snake.png';
spanNameCard.textContent = 'Snake';
cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

divCardCont.id = 'card-3';
imgCard.src = 'checkers.png';
spanNameCard.textContent = 'Checkers';
cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

divCardCont.id = 'card-4';
imgCard.src = 'chest.png';
spanNameCard.textContent = 'Chest';
cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

const linkGameTTT = document.getElementById('card-1');

linkGameTTT.addEventListener('click',function(){
    location.href = '/pages/tic-tac-toe/tic-tac-toe-game.html';
});