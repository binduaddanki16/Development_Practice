// const calci={
// brand:"casio",
// add:function(a,b){
//     return a+b;
// },
// sub:function(a,b){
//     return a-b;
// },
// mul:function(a,b){
//     return a*b;
// }
// };
// console.log(calci.brand);
// console.log(calci.add(2,3));
// console.log(calci.sub(3,2));
// console.log(calci.mul(2,3));
function large(a,n){
    let b=[];
    for(let i=0;i<a.length;i++){
        if(a[i]>n){
            b.push(a[i]);
        }
    }
    return b;
}
let a=[1,10,12,3,3,5,56];
let x=large(a,9);
console.log(x);