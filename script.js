let navbar = document.querySelector('.header .flex .navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}




document.querySelector('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
    if(inputNumber.value.lenght > inputNumber.maxlenght) inputNumber.value
    = inputNumber.value.slice(0,inputNumber.maxlenght);
   };
})
