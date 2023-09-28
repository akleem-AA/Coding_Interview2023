let arr = [1,200,3,45,8,0];

function highestNumber (num){
    let high = 0;
    for(let i =0;i<num.length;i++){
        if(num[i]>high){
            high = num[i]
        }
    }
    return high
}
let result = highestNumber(arr)
console.log(result) //200


function inBuildMathmax (n){
    return Math.max(...n)
}
let result1 = inBuildMathmax(arr)
console.log(result1) //200
