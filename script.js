// 화면 축소 시 //
const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

//버튼 누를 시 //


document.querySelector('.nextBtn').addEventListener('click', () => {
    document.querySelector('.container').style.transform = 'translate(-100vw)';    
});
