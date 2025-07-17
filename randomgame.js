let n=prompt("enter the max number")
let random=Math.ceil(Math.random()*3)
while(true){
    let guess=prompt("enter the correct value")
    if(guess==random){
        console.log("welcome");
         break;
    }
    else 
     {
       console.log("try agin");
    }
  //else if(guess>random){
   // guess=prompt("guess the number is bigger then random")
   //}
  // else if(guess<random){
  //  guess=prompt("guess the number is smaller then random")
 // }
}