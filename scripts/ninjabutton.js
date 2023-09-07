const ninjabutton = document.querySelector(".nbox");
const ninja = document.querySelector(".ninjaimage");
let fullOpacity = 0.00;
ninjabutton.addEventListener("click", () => {
    fullOpacity = 1.00;
    ninja.style.opacity = fullOpacity;
    let timer = setInterval(()=>{
        fullOpacity = fullOpacity - 0.01;
        console.log(ninja.style.opacity);
        ninja.style.opacity = fullOpacity;
        if(fullOpacity <= 0.00){
            ninjabutton.removeEventListener("click", ()=>{});
            clearInterval(timer);
        }
    }, 20);
}) 