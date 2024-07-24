const contentContainer = document.getElementById('contentCont');

const tempCardGames = document.getElementById('cardGames');
let divCardCont = tempCardGames.content.querySelector('div');
let imgCard = tempCardGames.content.querySelector('img');
let spanNameCard = tempCardGames.content.querySelector('span');


divCardCont.id = 'card-1';
imgCard.src = 'image/tictactoe.png';
spanNameCard.textContent = 'Tic-Tac-Toe';
let cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

divCardCont.id = 'card-2';
imgCard.src = 'image/snake.png';
spanNameCard.textContent = 'Snake';
cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

divCardCont.id = 'card-3';
imgCard.src = 'image/checkers.png';
spanNameCard.textContent = 'Checkers';
cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

divCardCont.id = 'card-4';
imgCard.src = 'image/chest.png';
spanNameCard.textContent = 'Chest';
cloneCardGames = tempCardGames.content.cloneNode(true);
contentContainer.append(cloneCardGames);

const linkGameTTT = document.getElementById('card-1');

linkGameTTT.addEventListener('click',function(){
    location.href = 'games/tic-tak-toe/tic-tak-toe Game.html';
});