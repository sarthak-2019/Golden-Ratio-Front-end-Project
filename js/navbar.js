burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('sar1');
    navlist.classList.toggle('sar1');
    navbar.classList.toggle('sar');
})
