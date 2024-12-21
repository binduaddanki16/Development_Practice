start=['january','july','march','agust'];
start.splice(0,2,'july','june');
let a=[],b=[];
let n=prompt("enter n");
for(let  i=1;i<=n;i++){
   if(i%2==0){
    a.push(i);
   }else{
    b.push(i);
   }
}
let s='BINDU';
let x=s.length;
console.log(x);
console.log(a);
console.log(b);
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
const fav="hi nanna";
let guess=prompt('enter your guess');
guess=guess.toLowerCase();
while((fav!=guess)&&(guess!="quit")){
    guess=prompt('oops enter again');
    guess=guess.toLowerCase();
}

