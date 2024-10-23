const sidebar = document.getElementById('sidebar');
const head = document.getElementById('head');
const toggleNavBtn = document.getElementById('toggleNavBtn');
const contant = document.getElementById('content');
const blocker = document.getElementById('blocker');
const gamesBtn = document.getElementById('btnGames');
let contentBlock = document.getElementById('content');
let imgUser = document.getElementById('imgUser');
const comeAcc = document.getElementById('comeAcc');

// позже придумать как их объединить
toggleNavBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    head.classList.toggle('active');
    contant.classList.toggle('active');
    blocker.classList.toggle('active');
});

blocker.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    head.classList.toggle('active');
    contant.classList.toggle('active');
    blocker.classList.toggle('active');
})

// comeAcc.addEventListener('click', register);

// function register(){

// }