# react-basic-maths

[![npm version](https://badge.fury.io/js/react-basic-maths.svg)](https://badge.fury.io/js/react-basic-maths)
![Build Status](https://img.shields.io/github/workflow/status/Alan-Nixon/react-basic-maths/CI)
![License](https://img.shields.io/badge/license-MIT-blue.svg)


A simple math utility library for basic and advanced math operations built with TypeScript.

## Features

- `sum`, `sub`, `multi`, `div` for basic arithmetic operations
- `abs`, `max`, `min`, `average` for common math functions
- `permutation`, `combination` for advanced combinatorics
- `round`, `floor`, `ceil` for rounding operations
- `pow`, `sqrt`, `cbrt`, `log` for power and logarithmic operations
- `fibonacci` for generating Fibonacci numbers

> **Upcoming:**
> Trigonometry, Statistics, and Geometry calculations will be added in upcoming versions.

## Installation

```bash
npm install react-basic-maths
```

## Usage

```ts
import math from 'react-basic-maths';

math.sum(1, 2, 3); // 6
math.sub(10, 5, 2); // 3
math.multi(2, 3, 4); // 24
math.div(100, 2, 5); // 10

math.abs(-20); // 20
math.max(1, 2, 3); // 3
math.min([5, 1, 6]); // 1
math.average(2, 4, 6); // 4

math.permutation(5, 2); // 20
math.combination(5, 2); // 10

math.round(4.6); // 5
math.floor(4.6); // 4
math.ceil(4.1); // 5

math.pow(2, 3); // 8
math.sqrt(9); // 3
math.cbrt(27); // 3
math.log(100, 10); // 2

math.fibonacci(7); // [0, 1, 1, 2, 3, 5, 8]
```

## API

### Basic Arithmetic
- `sum(...numbers: number[])`
- `sub(...numbers: number[])`
- `multi(...numbers: number[])`
- `div(...numbers: number[])`

### Advanced Math
- `permutation(n: number, r: number)`
- `combination(n: number, r: number)`

### Utility Math
- `abs(num: number)`
- `max(...args: number[] | [number[]])`
- `min(...args: number[] | [number[]])`
- `average(...args: number[] | [number[]])`

### Rounding
- `round(num: number)`
- `floor(num: number)`
- `ceil(num: number)`

### Power and Roots
- `pow(base: number, exponent: number)`
- `sqrt(num: number)`
- `cbrt(num: number)`

### Logarithmic
- `log(num: number, base: number = 10)`

### Sequences
- `fibonacci(n: number)`

## License

MIT

## Contributing

Feel free to open issues or submit pull requests to improve the library or suggest new features.

