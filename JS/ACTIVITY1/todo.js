let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
 btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let item2=document.createElement("button");
    item2.innerText="delete";
    item2.classList.add("delete");
   
    console.log(inp.value);
    item.appendChild(item2);
    ul.appendChild(item);
    inp.value="";
 });

ul.addEventListener("click",function(event){
        if(event.target.nodeName=="BUTTON"){
            let par=event.target.parentElement;
            par.remove();
        }
});
