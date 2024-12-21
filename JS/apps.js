let penprice=5;
let pencilprice=40;
console.log("the peice of pen is "+penprice+" pencilprice is "+pencilprice);
console.log(`the price of pen is ${penprice} and pencil price is ${pencilprice}`)
let a=10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
alert("hi");
let color="red";
if(color=="red"){
    console.log("stop");
}
let size="S";
if(size=="xl"){
    console.log("price 250");
}
else if(size=='l'){
    console.log("price 200");
}else{
    console.log("price 100");
}
// //switch 
// let day=1;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         cconsole.log("sunday");
//         break;
//     default:
//         console.log("error");
// }
let bindu=prompt(" enter your age");
alert(`Bindu is ${bindu} years old` );
let s=" Bindu  Addanki ";
console.log(s);
console.log(s.trim());
let str="ilovecoding";
console.log(str.slice(0,4));
console.log(str.slice(5));
console.log(str.slice(-5));//str.slice(-n)=str.slice(str.length-n)
//Replace
let x=str.replace("love","do");
let y=str.replace("o","x");
console.log(x);
console.log(y);
let m="mango";
console.log(m.repeat(3));
let msg=" help!  ";
console.log(msg.toUpperCase().trim());
let nam="apnacollge";
console.log(nam.slice(4,nam.length).replace('l','t'))
let arr=[1,"bindu",9.1];
arr.push("cse");
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("lbrce");
console.log(arr);
arr.shift();
console.log(arr);
