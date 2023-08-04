const ninjabutton = document.querySelector(".nbox");
const ninja = document.querySelector(".ninjaimage");
ninjabutton.addEventListener("click", () => {
    let fullOpacity = 1.00;
    ninja.style.opacity = fullOpacity;
    let timer = setInterval(()=>{
        fullOpacity = fullOpacity - 0.01;
        console.log(ninja.style.opacity);
        ninja.style.opacity = fullOpacity;
        if(fullOpacity < 0.00){
            clearInterval(timer);
        }
    }, 20);
})