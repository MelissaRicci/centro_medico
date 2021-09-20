let menu = document.querySelector('#menu-botao');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


const serv = document.getElementById('serv');
const serv2 = document.getElementById('serv2');
const serv3 = document.getElementById('serv3');
const serv4 = document.getElementById('serv4');
const serv5 = document.getElementById('serv5');
const serv6 = document.getElementById('serv6');
const serv7 = document.getElementById('serv7');
const serv8 = document.getElementById('serv8');
const serv9 = document.getElementById('serv9');
const serv10 = document.getElementById('serv10');
const serv11 = document.getElementById('serv11');
const serv12 = document.getElementById('serv12');
const serv13 = document.getElementById('serv13');
const serv14 = document.getElementById('serv14');
const serv15 = document.getElementById('serv15');
const serv16 = document.getElementById('serv16');
const serv17 = document.getElementById('serv17');
const serv18 = document.getElementById('serv18');
const serv19 = document.getElementById('serv19');
const serv20 = document.getElementById('serv20');
const serv21 = document.getElementById('serv21');
const serv22 = document.getElementById('serv22');
const serv23 = document.getElementById('serv23');

function mostraInfo(elemento) {
    if (elemento.value == 1) {
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv.style = 'display: block;'

        window.scrollBy(0, 150)
    

    } else if (elemento.value == 2) {
        serv.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv2.style = 'display: block;'
 
        window.scrollBy(0, 150)
                    
    } else if (elemento.value == 3) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv3.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 4) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv4.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 5) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv5.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 6) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv6.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 7) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv7.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 8) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv8.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 9) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv9.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 10) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv10.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 11) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv11.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 12) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv12.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 13) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv13.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 14) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv14.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 15) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv16.style = 'display: none;'
        serv17.style = 'display: none;'

        serv15.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 16) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv17.style = 'display: none;'

        serv16.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento.value == 17) {
        serv.style = 'display: none;'
        serv2.style = 'display: none;'
        serv3.style = 'display: none;'
        serv4.style = 'display: none;'
        serv5.style = 'display: none;'
        serv6.style = 'display: none;'
        serv7.style = 'display: none;'
        serv8.style = 'display: none;'
        serv9.style = 'display: none;'
        serv10.style = 'display: none;'
        serv11.style = 'display: none;'
        serv12.style = 'display: none;'
        serv13.style = 'display: none;'
        serv14.style = 'display: none;'
        serv15.style = 'display: none;'
        serv16.style = 'display: none;'

        serv17.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } 

}

function mostraInfo2(elemento2) {
    if (elemento2.value == 18) {
        serv19.style = 'display: none;'
        serv20.style = 'display: none;'
        serv21.style = 'display: none;'
        serv22.style = 'display: none;'
        serv23.style = 'display: none;'

        serv18.style = 'display: block;'

        window.scrollBy(0, 150)

    } else if (elemento2.value == 19) {
        serv18.style = 'display: none;'
        serv20.style = 'display: none;'
        serv21.style = 'display: none;'
        serv22.style = 'display: none;'
        serv23.style = 'display: none;'

        serv19.style = 'display: block;'
 
        window.scrollBy(0, 150)
                    
    } else if (elemento2.value == 20) {
        serv18.style = 'display: none;'
        serv19.style = 'display: none;'
        serv21.style = 'display: none;'
        serv22.style = 'display: none;'
        serv23.style = 'display: none;'

        serv20.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento2.value == 21) {
        serv18.style = 'display: none;'
        serv19.style = 'display: none;'
        serv20.style = 'display: none;'
        serv22.style = 'display: none;'
        serv23.style = 'display: none;'

        serv21.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento2.value == 22) {
        serv18.style = 'display: none;'
        serv19.style = 'display: none;'
        serv20.style = 'display: none;'
        serv21.style = 'display: none;'
        serv23.style = 'display: none;'

        serv22.style = 'display: block;'

        window.scrollBy(0, 150)
        
    } else if (elemento2.value == 23) {
        serv18.style = 'display: none;'
        serv19.style = 'display: none;'
        serv20.style = 'display: none;'
        serv21.style = 'display: none;'
        serv22.style = 'display: none;'

        serv23.style = 'display: block;'

        window.scrollBy(0, 150)
    }
}


