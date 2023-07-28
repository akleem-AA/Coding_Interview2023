// 1. Question:- we need to change is_selected value based on provided id
  const array = [
    {id:1, name: "Raman", is_selected: false},
     {id:2, name: "Rahul", is_selected: false},
    {id:3, name: "Ramesh", is_selected: false},
    ]
let ids = 3

  const array = [
    {id:1, name: "Raman", is_selected: false},
     {id:2, name: "Rahul", is_selected: false},
    {id:3, name: "Ramesh", is_selected: false},
    ]
let id = 2

function changeStatusValue(arr,id){
    let modifyArr = []
    for(let i =0;i<arr.length;i++){
        if(arr[i].id ==id){
           arr[i].is_selected =true;
          modifyArr.push(arr[i])
        }else{
            modifyArr.push(arr[i])
        }
    }
    return modifyArr;
}

let result = changeStatusValue(array,id)
console.log(result)// output will be sutable



// 2. question:- there is a array of object you need change is_selected value based on provided id's array 
  const array = [
    {id:1, name: "Raman", is_selected: false},
     {id:2, name: "Rahul", is_selected: false},
    {id:3, name: "Ramesh", is_selected: false},
    ]
let ids = [2,3]


function findId (array,ids){
    let arr = []
    for(let item of array){
        if(ids.includes(item.id)){
            item.is_selected =true
            arr.push(item)
        }else{
            arr.push(item)
        }
    }
    return arr;

}
const g = findId(array,ids)
console.log("new array",g)

