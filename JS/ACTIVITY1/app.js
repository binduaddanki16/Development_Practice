let btn=document.querySelector("button");
btn.addEventListener("click",function(){
let h1=document.querySelector("h1");
let randcolor=getRandColor();
h1.innerText=randcolor;
let div=document.querySelector("div");
 div.style.backgroundColor=randcolor;
 div.innerText=`this color is your new color`;
});
function getRandColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color=`rgb(${r},${g},${b})`;
    return color;
}