// const skater = document.querySelector(".skater");
// console.log(window.innerWidth);
// let windowSize = window.innerWidth;

// let timer = setInterval(()=>{
//     skater.style.opacity = 1;
//     let skaterPos = -140;
//     windowSize = window.innerWidth || document.documentElement.clientWidth || 
//     document.body.clientWidth;;
//     skater.style.left = `${skaterPos}.px`;
//     let skaterMove = setInterval(()=>{
//         console.log(skaterPos);
//         skaterPos = skaterPos+1;
//         skater.style.left = `${skaterPos}.px`;
//         // console.log(skaterPos);
//         if(skaterPos >= windowSize){
//             clearInterval(skaterMove);
//         };
//         window.addEventListener("resize", ()=>{
//             windowSize = window.innerWidth || document.documentElement.clientWidth || 
//             document.body.clientWidth;;
//             console.log(windowSize);
//             clearInterval(skaterMove);
//             skaterPos = -140;
//             let skaterOpacity = 1;
//             let opacityTimer = setInterval(()=>{
//                 console.log(skaterOpacity);
//                 skaterOpacity = skaterOpacity - 0.1;
//                 skater.style.opacity = skaterOpacity;
//                 if(skaterOpacity <= 0.00){
//                     skater.style.left = `${skaterPos}.px`;
//                     clearInterval(opacityTimer);
//                 }
//             }, 20);
//         });
//         //1 pixel every 10 miliseconds
//         //needs to traverse window innerWidth + 140
//     }, 10);
// }, 10 * (windowSize + 140));

const skater = document.querySelector(".skater");
let skaterPos = -140;
skater.style.left = `${skaterPos}.px`;
let skaterMove = setInterval(()=>{
    console.log(skaterPos);
    skaterPos = skaterPos+1;
    skater.style.left = `${skaterPos}.px`;
    // console.log(skaterPos);
    if(skaterPos >= window.innerWidth){
        skaterPos = -140;
    };
}, 10);