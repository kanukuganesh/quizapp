let arr=[1,2,3,4]
for(let i=0;i<arr.length;i++)
{
   // if(arr[i]<=3){   // only 1,2,3 are come
    console.log(arr[i]);
}

// print all items in array
// 1
// 2
// 3
// 4

arr=[[1,2,3],[4,5,6],[7,8,9]]
 for(row of arr){   // for enter in array in first array and so on 
    for(col of row){ // in first array in first clomn item and so on
        console.log(col);
    }
 }