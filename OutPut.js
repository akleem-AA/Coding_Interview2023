let obj = {
    "name":"asif",
    "score":10.04,
    getScore: function(){
        return this.score;
    }
}

let newObj = Object.create(obj);
newObj.score =1;
delete newObj.score;
console.log(newObj.getScore()); //10.04 due to create newObj is reference
