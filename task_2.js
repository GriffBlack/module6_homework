function isPrimeNumber(num) {
    if (Number.isInteger(num) && num >= 2 && num <= 1000) {
        let res = 1;
        for (let i = 2; i < Math.sqrt(num); i++)
            if (num % i === 0)
                res = 0;
        if (res) {
            console.log('Простое число');
        } else {
            console.log('Не простое число');
        }
    } else if (num === 0) {
        console.log('Не простое число');
    } else {
        console.log('Данные неверны');
    }
}

isPrimeNumber(10000);
isPrimeNumber(0);
isPrimeNumber(3);
isPrimeNumber(5);
isPrimeNumber(7);
isPrimeNumber(1000);