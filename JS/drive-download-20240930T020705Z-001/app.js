let images=document.getElementsByClassName("oldImg");
for(let i=0;i<images.length;i++){
    images[i].src="assets/spiderman_img.png";
}
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div"));
let links=document.querySelectorAll(".box a");
for(let i=0;i<links.length;i++){
    links[i].style.color="green";
}
let body=document.querySelector("body");
let p=document.createElement('p');
p.innerText="Hey I'm red!";
p.classList.add("red");
body.append(p);
let h3=document.createElement('h3');
h3.innerText="Hey I'm blue h3";
h3.classList.add("blue");
body.append(h3);
let div=document.createElement("div");
let h1=document.createElement('h1');
h1.innerText="im in a div";
let p1=document.createElement('p');
p1.innerText="me too";
body.prepend(div);
div.appendChild(h1);
div.appendChild(p1);
div.classList.add("box2");
let input=document.createElement("input");

let btn=document.createElement("button");
btn.innerText="click me";

input.innerHTML="<input type=text placeholder='enter'>";
body.append(input);