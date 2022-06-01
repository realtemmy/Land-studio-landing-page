
nav = document.querySelector('nav');
navUl = document.querySelector('nav ul');
hamburger = document.getElementById('hamburger');
closeBtn = document.getElementById('close-btn');


hamburger.addEventListener('click', (e)=>{
    navUl.classList.add('show')
    // nav.style.backgroundColor = "black";
    hamburger.classList.add('show');
    closeBtn.classList.add('show')
});


closeBtn.addEventListener('click', ()=>{
    navUl.classList.remove('show')
    nav.style.backgroundColor = "transparent";
    hamburger.classList.remove('show');
    closeBtn.classList.remove('show')
})