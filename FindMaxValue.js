// 1. Question:- find the heighest number in a given arra
let arr = [1,3,45,6,600,2,2,1,100,330,]

//output should be = 300

function heighNumber(arr){
    let num = 0; //asume we have largest value is == and also update the value based next largest vlaue
    for(let i = 0;i<arr.length;i++){
        if(arr[i] >num){ // comparing value which is gereter then and less then
            num = arr[i] //updating the variable value
            console.log("max value",num)
        }
    }
    return num
}

console.log(heighNumber(arr)) //outpu 600

