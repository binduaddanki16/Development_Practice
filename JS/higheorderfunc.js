function greets(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("namaskaram");
}
greets(greet,2);
greets(function(){console.log("hello")},100);//O/p: 1000 hello

function oddtest(req){
    if(req=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(req=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("wrong request");
    }
}
let val=oddtest("even");
console.log(val(9));