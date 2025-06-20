export const computeFibonacciNumber = (position: number | null, isRecursive: boolean = false): number => {
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;   
    }

    if (position === 0) {
        return 0;
    }
    if (position < 0) {
        return computeNegativeFibonacci(position);
    }

    if (notNullPosition <= 2) {
        return 1;
    }

    if (isRecursive) {
        return recursiveFibonacci(1, 1, position - 2);
    }

    let i = 1;
    let j = 1;

    let currentPosition = 2;
    while (currentPosition < notNullPosition) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};

const computeNegativeFibonacci = (position: number): number => {
    if (position >= 0) {
        throw new Error(`Position must be less than zero! Received: ${position}.`);
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position);
    return resultIsNegative ? absoluteResult * -1 : absoluteResult;
}

export const computeFibonacciArray = (start: number, endInclusive: number): number[] => {
    const inputArray = [...Array(endInclusive - start + 1).keys()].map(i => i + start);
    return inputArray.map(x => computeFibonacciNumber(x));
}

const recursiveFibonacci = (previous: number, current: number, stepsLeft: number): number => {
    if (stepsLeft <= 0) {
        return current;
    } else {
        return recursiveFibonacci(current, previous + current, stepsLeft - 1);
    }
}
