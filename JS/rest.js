function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us ",args[i]);
    }
}
let args=[1,2,3,4];
sum(...args);
function min(){
    console.log(arguments);
}
min();

//destructing
let names=["tony","mony","kony","jany"];
let [winner,runner,third]=names;
console.log(winner,runner,third);