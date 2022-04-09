function sumFibonacci(num) {
    let fibo=[];
    if (num > 0) fibo.push(0);
    if (num >= 1) fibo.push(1);

    if (num > 2) {
        while ((fibo[fibo.length-2] + fibo[fibo.length-1]<num)) {
            fibo.push(fibo[fibo.length-2] + fibo[fibo.length-1]);
        }
    }
    return fibo.filter(num => (num % 2) != 0).reduce((acum,num) => acum + num,0);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;