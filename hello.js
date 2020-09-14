console.log('hello well come github tutorial')
arr=[1,2,3,4,5,6,7,8,9]
arr.forEach(function(value){
    console.log(value)
});

var result=arr.filter(function(value){
    return value%3==0
})
console.log(result)
var result1=arr.map(function(value){
    return value*value;
})
console.log(result1)