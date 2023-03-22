function sum(x) {
    return function(y) {
        return x + y;
    };
}


console.log(sum(30)(2), sum(1)(1));