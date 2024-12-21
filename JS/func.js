function hello(){
    console.log("hello");
}
hello();
function printpoem(){
    console.log("twwinkle twinkle littlw star");
    console.log("how i wonder what u are");
}
printpoem();
function rolldice(){
    let n=Math.floor(Math.random()*6)+1;
    console.log(n);
}
rolldice();
function nameprint(name){
    console.log(name);
}
nameprint("bindu");
function sumf(a,b,c){
    return a+b+c;
}
function avg(a,b,c){
    let avg=sumf(a,b,c)/3;
    console.log(avg);
}
avg(5,3,5);
function table(n){
    for( let i=1;i<=10;i++){
        console.log(`${n} * ${i}=${n*i}`);
    }
}
table(7);
function sumofn_num(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
let res=sumofn_num(10);
console.log(res);
 function strcat(s1,s2){
    return s1+s2;
 }
 let s=strcat("bindu ","addanki");
 console.log(s);
 let sum=function(a,b){
    return a+b;
 }
 sum(2,3);
 console.log(sum);//we get function definition