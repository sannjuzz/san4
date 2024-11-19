
          
let heroBg =document.querySelector('.hero');

setInterval(() => {
   
   heroBg.style.backgroundImage ="url(../css/bg-light.jpg)"
   setTimeout(() => {
    heroBg.style.backgroundImage ="url(../css/bg.jpg)"
   }, 1000);
}, 2000);

