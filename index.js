console.time("fib start")
const fib = (n) =>{
    if(n <= 2) return 1;
    return fib(n -1) + fib(n- 2);
}

console.log(fib(7));
console.log(fib(10));
console.log(fib(16));
console.log(fib(40));


console.timeEnd("fib start")


//memoization
console.time("memo")
const memo = (n, memo = {}) =>{
    if(n <= 2) return 1;
   if(n in memo) return meno[n];
   memo[n] = fib(n-1, memo) + fib(n -2, memo);
   return memo[n];

}


console.log(memo(7));
console.log(memo(10));
console.log(memo(16));
console.log(memo(40));

console.timeEnd("memo")

