//Question 1 sort in assending order
function incr(arr){
    for(let i = 0 ;i <arr.length-1;i++){
        console.log('i =',arr[i])
        for(let j = 0;j<arr.length-1-i;j++){
            console.log('jjj=',arr[j])
            if(arr[j]>arr[j+1]){
            let tem = arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=tem
            }
        }
    }
    return arr
  
}
let e =incr([1,3,2])
console.log("final",e) //[1,2,3]


//Question 2 sort it in desending order 
function desendingOrder(arr){
    for(let i = 0 ;i <arr.length-1;i++){
        for(let j = 0;j<arr.length-1-i;j++){
            if(arr[j]<arr[j+1]){
            let tem = arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=tem
            }
        }
    }
    return arr
  
}
let result =desendingOrder([1,3,2])
console.log("final",result) //output [3,2,1]
