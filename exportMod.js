function avg(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element/2;
        
    });
    return sum; 
}
module.exports = {
    avg:avg,
    name:"mahesh",
    surname:"tamrakar"
} 