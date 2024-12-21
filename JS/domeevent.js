let btn=document.querySelector("button");
btn.onclick=function(){
    console.log("btn was clicked");
};

let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("p clicked");
});

let div=document.querySelector("div");
div.addEventListener("mouseenter",function(){
console.log("mouse inside box");
});