let str ="my name is world";

function count(str){
    let total=0;
    for(let i =0 ;i<str.length;i++){
        let isSpace = /\s/.test(str[i]);
        
        if(!isSpace){
            total++;
        }
    }
    return total;
}

console.log(count(str)) //13
