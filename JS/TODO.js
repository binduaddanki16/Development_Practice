let todo=[];
let req=prompt("please enter your request");
console.log(req);
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("----------------");
        for(task of todo){
            console.log(task);
        }
        console.log("----------------");
    }
    if(req=='add'){
        let task=prompt("enter task to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=='delete'){
        let idx=prompt("enter task index to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }
    req=prompt("enter your next request");
}