let ar=["ganesh","sai","charith"]
let ar1=["ganesh",1]
let ar2=[2]
//ar[0][2]='n'
//ar.legnth='3'
//ar[0].length='5'
//ar[0]="radha" o/p=radha
//ar o/p=["radha","sai","charith"]
// so array is mutable 

// ar[6]="krishna" o/p="krishna"
//ar o/p=["radha","sai","charith",empty*2,"krishna"]

//ar.push("sindhu") // used to added end of the array
//ar o/p=["radha","sai","charith",empty*2,"krishna","sindhu"]

//ar.pop()  // used to remove end of the array
//ar o/p=["radha","sai","charith",empty*2,"krishna"]

// ar.unshift("sindhu")  // used to add first of the array
// ar o/p=["sindhu","radha","sai","charith",empty*2,"krishna"]

// ar.shift("radha") // used to remove any array item 
//ar o/p=["sindhu",,"sai","charith",empty*2,"krishna"]

//ar.indexOf("sai")  // used to find index 
// o/p= 2

// ar.include("sai") // the item prasent or not in the array
// o/p= true // in the form of true or flase

// concatation is used to adding of two array (or) marging of two array into one array
// ar.concat(ar1)
// o/p=["sindhu",,"sai","charith",empty*2,"krishna","ganesh",1]
// (or) int a=ar.concat(ar1)

//reverse used to reverse of array
//let ar=["ganesh","sai","charith"]
// ar2.reverse() 0/p=[1,"ganesh"]

//slice is used to taken part of the items (which item to u want)
//let ar=["ganesh","sai","charith"]
//ar.slice(1,3) o/p=["sai","charith"]

//splice is used to delete a part of ittems
//let ar=["ganesh","sai","charith"]
//ar.splice(1,2) 
// o/p=["ganesh"]

// splice is  also used to adding spicific place in to an array
//let ar=["ganesh","sai","charith"]
//ar.splice(1,0,"radha","krishna") // 1 is place to add // 0 is delete  // "radha","krishna" is added 
// o/p=["ganesh","sai","radha","krishna",charith"]

// sorting is usedd to sorting of array in strings
// let ar=["ganesh","sai","charith"]
// ar.sort()
// o/p= ["charith","ganesh","sai"]

let num=[1,30,40]

// let num1;
// num1=num
// num1 o/p=[1,30,40]
// num1==num o/p=true // were "num"  are added (or) delete items and  auto matically change in "num1" 
// let num2=[1,30,40]
// num2==num o/p=flase becacuse values are same but address are different

let num1=[[1,2,3],[4,5,6],[7,8,9]] //multidimensional array
// o/p= array(3)Array(3) [ (3) […], (3) […], (3) […] ]
//0: Array(3) [ 1, 2, 3 ]
//1: Array(3) [ 4, 5, 6 ]
//2: Array(3) [ 7, 8, 9 ]
//length: 3//
​// according in num is [00,01,02]
// [1,2,3]
// num1[0][1] o/p=2












