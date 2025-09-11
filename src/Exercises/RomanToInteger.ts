const RomanToInteger = (romanNumber: string): number => {
    let number: number[] = [];

    let i = 0;
    while (i < romanNumber.length) {
        let aux = romanNumber[i] ?? "";
        let num1 = numbers(aux);
        number.push(num1); //add array
        i++;
    }
    const numberis = generateNumber(number);
    return numberis;
};

const generateNumber = (number: number[]): number => {
    let numberResponse = number[0] ?? 0;
    let i = 1;
    while (i < number.length) {
        let previous = number[i - 1] ?? 0;
        let current = number[i] ?? 0;
        if (previous < current) {
            numberResponse = numberResponse - previous + (current - previous);
        } else {
            numberResponse = numberResponse + current;
        }
        i++;
    }
    return numberResponse;
};

const numbers = (x: string): number => {
    let response: number;
    if (x === "I") {
        response = 1;
    } else if (x === "V") {
        response = 5;
    } else if (x === "X") {
        response = 10;
    } else if (x === "L") {
        response = 50;
    } else if (x === "C") {
        response = 100;
    } else if (x === "D") {
        response = 500;
    } else if (x === "M") {
        response = 1000;
    } else {
        response = 0;
    }
    return response;
};



export default RomanToInteger;
