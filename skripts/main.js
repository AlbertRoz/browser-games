const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const head = document.getElementById('head')

toggleBtn.addEventListener('click',function(){
    sidebar.classList.toggle('active')
    head.classList.toggle('active')
})