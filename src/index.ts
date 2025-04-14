// Basic Math Operations

export const sum = (num1: number, num2: number, ...numbers: number[]) =>
    num1 + num2 + numbers.reduce((total, num) => total + num, 0);

export const sub = (num1: number, num2: number, ...numbers: number[]) =>
    num1 - num2 - numbers.reduce((total, num) => total + num, 0);

export const multi = (num1: number, num2: number, ...numbers: number[]) =>
    num1 * num2 * numbers.reduce((total, num) => total * num, 1);

export const div = (num1: number, num2: number, ...numbers: number[]) => {
    const rest = [num2, ...numbers];
    if (rest.includes(0)) throw new Error("Cannot divide by zero");
    return [num1, ...rest].reduce((total, num) => total / num);
};

const factorial = (num: number): number =>
    num <= 1 ? 1 : num * factorial(num - 1);

export const permutation = (n: number, r: number): number => {
    if (n < 0 || r < 0 || r > n) throw new Error("Invalid values for n or r");
    return factorial(n) / factorial(n - r);
};

export const combination = (n: number, r: number): number => {
    if (n < 0 || r < 0 || r > n) throw new Error("Invalid values for n or r");
    return factorial(n) / (factorial(r) * factorial(n - r));
};

export const abs = (num: number): number => Math.abs(num);

export const max = (...args: number[] | [number[]]): number => {
    const numbers = Array.isArray(args[0]) ? args[0] as number[] : args as number[];
    if (numbers.length === 0) throw new Error("No numbers provided");
    return Math.max(...numbers);
};

export const min = (...args: number[] | [number[]]): number => {
    const numbers = Array.isArray(args[0]) ? args[0] as number[] : args as number[];
    if (numbers.length === 0) throw new Error("No numbers provided");
    return Math.min(...numbers);
};

export const average = (...args: number[] | [number[]]): number => {
    const numbers = Array.isArray(args[0]) ? args[0] as number[] : args as number[];
    if (numbers.length === 0) throw new Error("No numbers provided");
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
};

export const round = (num: number): number => Math.round(num);
export const floor = (num: number): number => Math.floor(num);
export const ceil = (num: number): number => Math.ceil(num);

export const pow = (base: number, exponent: number): number =>
    Math.pow(base, exponent);

export const sqrt = (num: number): number => Math.sqrt(num);
export const cbrt = (num: number): number => Math.cbrt(num);

export const log = (num: number, base: number = 10): number => {
    if (num <= 0) throw new Error("Logarithm undefined for zero or negative numbers.");
    if (base <= 0 || base === 1) throw new Error("Base must be positive and not equal to 1.");
    return Math.log(num) / Math.log(base);
};

// Number Theory

export const gcd = (a: number, b: number): number => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
};

export const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);

export const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    for (let i = 2, sqrtN = Math.sqrt(n); i <= sqrtN; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

export const primeFactors = (n: number): number[] => {
    const factors: number[] = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    if (n > 1) factors.push(n);
    return factors;
};

export const fibonacci = (n: number): number[] => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const seq = [0, 1];
    while (seq.length < n) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    return seq;
};

export const nthFibonacci = (n: number): number => {
    if (n < 0) throw new Error("Fibonacci is not defined for negative numbers.");
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};

export const isEven = (n: number): boolean => n % 2 === 0;
export const isOdd = (n: number): boolean => n % 2 !== 0;

// Export as object
export default {
    sum,
    sub,
    multi,
    div,
    abs,
    max,
    min,
    average,
    round,
    floor,
    ceil,
    pow,
    sqrt,
    cbrt,
    log,
    permutation,
    combination,
    gcd,
    lcm,
    isPrime,
    primeFactors,
    fibonacci,
    nthFibonacci,
    isEven,
    isOdd,
};
