let str ="my name is aasi f";

function count(str){
    let total=0;
    let isNum = false;
    for(let i =0 ;i<str.length;i++){
        let isSpace = /\s/.test(str[i]);
        
        if(isSpace){
            isNum = false;
        }else{
            if(!isNum){
                total++;
                isNum=true;
            }
        }
    }
    return total;
}

console.log(count(str)) //output:- 5
