
function numRandomizer(a, b) {
    let res = Math.floor(Math.random() * (++b - a)) + a;
    console.log(res);
}
function numTimeOut(a, b) {
    const intervalId = setInterval(numRandomizer, 1000, a, b);
}

// numTimeOut(1, 3);