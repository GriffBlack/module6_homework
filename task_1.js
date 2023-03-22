let array = [1, 2, 3, 4, 4, 5, 6, 8, 0, 'Null', true, NaN, null];

function evenOddArrElement(arr) {

let sumCh = 0;
let sumNoCh = 0;
let sumZero = 0;
arr.forEach((item) => {
    if(typeof item == 'number' && item === item) {
        if (item === 0) {
            sumZero++;
        } else if (item % 2 === 0) {
            sumCh++;
        } else { sumNoCh++; }
    }   
});
console.log(`Количество четных элементов: ${sumCh}`);
console.log(`Количество не четных элементов: ${sumNoCh}`);
if (sumZero) console.log(`Количество нулей: ${sumZero}`);
}

evenOddArrElement(array);