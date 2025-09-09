export const isPalindrome = (x: number): boolean => {
    let res: boolean = false;

    let divisor = x;
    let size: number = 0;
    let module: number = 0;
    let reverse: string = "";

    if (divisor === 0) {
        return true;
    }

    if (divisor > 0) {
        while (divisor > 0) {
            module = Math.floor(divisor % 10);

            reverse = reverse + module;

            divisor = Math.floor(divisor / 10);
            size = size + 1;
        }

        if (x.toString() === reverse) {
            res = true;
        } else {
            res = false;
        }
    } else {
        res = false;
    }

    return res;
};
