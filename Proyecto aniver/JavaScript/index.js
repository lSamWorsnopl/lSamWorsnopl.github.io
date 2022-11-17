//Efecto del home page
let stars = document.getElementById("stars");
        let moon = document.getElementById("moon");
        let mountains_behind = document.getElementById("mountains_behind");
        let mountains_front = document.getElementById("mountains_front");
        let text = document.getElementById("text");
        let btn = document.getElementById("btn");
        let header = document.querySelector("header");

        window.addEventListener("scroll", function(){
            let value = window.scrollY;
            stars.style.left = value + 0.25 + "px";
            moon.style.top = value * 1.05 + "px";
            mountains_behind.style.top = value * 0.5 + "px";
            mountains_front.style.top = value * 0 + "px";
            text.style.marginRight = value * 4 + "px";
            text.style.marginTop = value * 1.5 + "px";
            btn.style.marginTop = value * 1.5 + "px";
            header.style.top = value * 0.5 + "px";
        })

        //Temporizador
        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");
        
        const currentAniver = new Date().getFullYear();
        
        const newAniversario = new Date(`February 02 ${currentAniver + 1} 00:00:00`);
        
        //Actualizacion del tiempo
        function updateCountdown() {
            const currentTime = new Date();
            const diff = newAniversario - currentTime;
        
            const d = Math.floor(diff / 1000 / 60 / 60 / 24);
            const h = Math.floor(diff / 1000 / 60 / 60) % 24;
            const m = Math.floor(diff / 1000 / 60) % 60;
            const s = Math.floor(diff / 1000) % 60;
        
            days.innerHTML = d;
            hours.innerHTML = h < 10 ? "0" + h : h;
            minutes.innerHTML = m < 10 ? "0" + m : m;
            seconds.innerHTML = s < 10 ? "0" + s : s;
        }
        
        setInterval(updateCountdown, 1000);

//Toggle
const toggleMenu = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
toggleMenu.onclick = function(){
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}