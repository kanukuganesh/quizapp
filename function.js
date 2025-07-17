 // let y=10; // global scope
// function myfun(){
//    let z=20;  // function scope     
//  console.log(y);
//    console.log(z);
// }
//myfun();
// console.log(y);
// console.log(z);



let x=10; // global scope
function myfun(){
    let y=20;  // function scope     
    console.log(x);
    function out(){
        let z=15;
        console.log(z);
        console.log(x);
         console.log(y);
    }
    out();
}
console.log(x);
myfun();//function call
console.log(x); // is not work because out side the function 
console.log(z); // is not  work because out side the function 

