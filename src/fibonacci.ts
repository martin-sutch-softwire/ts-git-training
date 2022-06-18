export const computeFibonacciNumber = (position: number, recursion: boolean = false): number => {
    if (recursion) {
        return recursiveFibonacci(1, 1, position - 2);
    }

    let i = 1;
    let j = 1;

    if (position <= 2) {
        return 1;
    }

    let currentPosition = 2;
    while (currentPosition < position) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};

const recursiveFibonacci = (previous: number, current: number, stepsLeft: number): number => {
    if (stepsLeft < 0) {
        return 1;
    }
    switch (stepsLeft) {
        case 0:
            return current;
        default:
            return recursiveFibonacci(current, previous + current, stepsLeft - 1);
    }
}
