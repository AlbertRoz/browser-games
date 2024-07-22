const contentContainer = document.getElementById('contentCont');

const tempMenuTTT = document.getElementById('cardSetings');
let divCardSeting = tempMenuTTT.content.querySelector('div');
let textCardSeting = tempMenuTTT.content.querySelector('p');

divCardSeting.id = '3x3';
textCardSeting.textContent = '3x3';
let cloneCardSeting = tempMenuTTT.content.cloneNode(true);
contentContainer.append(cloneCardSeting);

divCardSeting.id = '6x6';
textCardSeting.textContent = '6x6';
cloneCardSeting = tempMenuTTT.content.cloneNode(true);
contentContainer.append(cloneCardSeting);

divCardSeting.id = '9x9';
textCardSeting.textContent = '9x9';
cloneCardSeting = tempMenuTTT.content.cloneNode(true);
contentContainer.append(cloneCardSeting);