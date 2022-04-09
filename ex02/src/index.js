function myCounter(n) {
    if(n < 1) {
        return []
    } else {
        var myCounterArray = myCounter(n - 1);
        myCounterArray.unshift(n);
        return myCounterArray;
    }
}

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;