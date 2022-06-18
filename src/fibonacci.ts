export const computeFibonacciNumber = (position: number | null): number => {
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;   
    }

    let i = 1;
    let j = 1;

    if (notNullPosition <= 2) {
        return 1;
    }

    let currentPosition = 2;
    while (currentPosition < notNullPosition) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};
