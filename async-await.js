'use strict';
//io input-output- usualy are async
const getNumbers = (cb, size = 10) => {
    let numbers = [];
    //HW2.  setInterval()
    setTimeout(() => {
        while (numbers.length < size) {
            numbers.push(Math.ceil(-5 + Math.random() * 10));
        }
        cb(numbers)
    }, Math.random() * 1000);
}

//processing function - usualy are async
const maxNumber = (cb, numbers) => {
    //HW1 think another way to get the max value
    let maxNumber = numbers[0];
    setTimeout(() => {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }
        }
        cb(maxNumber);

    }, Math.random() * 1000);


}

const renderNumbers = (cb, number) => {
    let result = ``;
    setTimeout(() => {
        result = `{number : ${number}}`;
        cb(result);
    }, Math.random() * 1000);
}


/////////////////////////
getNumbers((numbers) => {
    maxNumber((maxNumber) => {
        renderNumbers(console.log, maxNumber)
    }, numbers);
})