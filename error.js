console.error("this message is wrong")
console.warn("this in correct")
let f=prompt("entre u name");
let l=prompt("enter a password");
document.write("welcome",f,l,"!");
var flag=confirm("are you sure");
if(flag==true){
    document.write("clicked on okay")
}
else{
    document.write("cliked on cancel")
}