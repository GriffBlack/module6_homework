const funcPow = (x, n) => {
    let res = x;
    if (n > 1) {
        res *= funcPow(x, --n);
    }
    return res;
}

console.log(funcPow(2, 7));