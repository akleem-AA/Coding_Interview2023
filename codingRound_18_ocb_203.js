let input = [[1, 2, 3], [3, 4, 5], [5, 6, 6],]

// inteview question from jaipur Purgesoft pvt limit

// Question:-1 remove nested array //[1,2,3,3,4,5,5,6,6]
// Question:-2 display increase order [1,2,3,3,4,5,5,6,6]
// Question:-3 remove duplicate value [1,2,3,4,5,6]
// Question:-4 display in decrease order [6,5,4,3,2,1]

let arr = []
let sort = [];
function recur(data){
   for(let i = 0 ;i <data.length; i ++){
       if(Array.isArray(data[i])){
           rec(data[i])
       }
   }
}
function rec(data){
   for(let i =0 ;i<data.length;i ++){
       if(data[i] <=data[i+1]){
           sort.push(data[i])
       }else{
           console.log('do',data[i])
       }
       arr.push(data[i])// nested array 
   }
}
function reverse (data){
    let result = []
    for(let i = data.length-1;i >=0;i--){
        result.push(data[i])
    }
    return result;
}

let result = recur(input)
console.log('nested array',arr)
console.log("sorted array",sort)
console.log('reverse',reverse(sort))
