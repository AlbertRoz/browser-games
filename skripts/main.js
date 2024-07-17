const sidebar = document.getElementById('sidebar');
const head = document.getElementById('head');
const toggleNavBtn = document.getElementById('toggleNavBtn');

toggleNavBtn.addEventListener('click',function(){
    sidebar.classList.toggle('active')
    head.classList.toggle('active')
})