let btn=document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});

let input=document.querySelector("input");
input.addEventListener("keydown",function(){
    console.log("key was pressed");
});
input.addEventListener("keyup",function(){
    console.log("key was released");
});
input.addEventListener("keypress",function(){
    console.log("key was typing");
});