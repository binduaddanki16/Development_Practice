const  mul=(a,b)=>{
    return a*b;
}
console.log(mul(7,6));
const cube=n=>{
    return n*n*n;
}
console.log(cube(3));
//implict return
const sum=(a,b)=>a+b;
console.log(sum(1,2));

setTimeout(()=>{
    console.log("Bindu Addanki");
},3000);
console.log("Winner is");
let id1=setInterval(()=>{
    console.log("drink water");
},2000);
let id2=setInterval(()=>{
    console.log("stay hydrated");
},2000);
console.log(`id1 is ${id1}`);
console.log(`id2 is ${id2}`);
clearInterval(id1);
clearInterval(id2);
let sqr=n=>n*n;
console.log(sqr(2));

  let id= setInterval(()=>{
    console.log("hello");
  },2000);
setInterval(()=>{
    clearInterval(id);
},10000);
let sqrsum=(...args)=>{
    return args.reduce((res,el)=>res+=(el*el));
}
console.log(sqrsum(1,2,3,4));