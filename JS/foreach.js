let arr=[-2,1,2,3,4,5];
let print=function(el){
    console.log(el);
}
arr.forEach(print);

//
a=[{name:"bindu",marks:"98"},{name:"gayathri",marks:99}];
a.forEach(function(el){
    console.log(el.name);
})
let twotable=arr.map((el)=>{
    return el*el;
});
console.log(twotable);
let even=arr.filter((el)=>{
    return el%2==0;
});
console.log(even);
let check=arr.every((el)=>{
    el%2==0;
});
console.log(check);
let min=arr.reduce((res,el)=>{
    if(res>el){
        return el;
    }else{
        return res;
    }
});
console.log(min);
let x= arr.map((el)=>{
 return el+5;
});
console.log(x);
let str=["a","B","c"];
let str1=str.map((el)=>{
 return el.toUpperCase();
});
console.log(str1);
 
const doubleAndReturnArgs=(arr,...args)=>[
     ...arr,
     ...args.map((el)=>el*2)
];
console.log(doubleAndReturnArgs([1,2,3],5,6,7,8));