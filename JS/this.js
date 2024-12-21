try{
    console.log("hello");
console.log("hello");
console.log("hello");
console.log(a);

}catch{
 console.log("error");
}

//this with arrow function
const student={
 name:"bindu",
 marks:"97",
 prop:this,
 getname(){
    console.log(this);
    console.log(this.name);
 },
 getmarks:()=>{
    console.log(this);
    console.log(this.marks);
 },
 getinfo1:function(){
    setTimeout(() => {
        console.log(this);//student
    }, 2000);
 },
 getinfo2:function(){
   setTimeout(function(){
    console.log(this);//window
   },2000);
 }
};
 //
