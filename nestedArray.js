let arr = [1,[1,2],[12,2],2,[2,3,[34,5]]]


function rec (arr){
    let a =[];
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            let subArr = rec(arr[i])
            a = a.concat(subArr)
            
        }else{
            a.push(arr[i])
        }
    }
    return a
}

console.log('final result ',rec(arr))
// // output final result  [
//   1, 1, 2, 12, 2,
//   2, 2, 3, 34, 5
// ]
