---
title: "Dynamic programming and memoization"
day: "16"
publishDate: "2020-08-24"
thumbnailImage: "../images/day-16.png"
shareText: "Day 16/100  Daily Coding Problem: Dynamic programming and memoization technique with fatorial and Pascal triangle."
hashtags: ["100DaysOfCode",'javascript','algorithms' ,'memoization','interview', 'dynamic', 'programming', 'pascal', 'triangle', 'recursive']
draft: false
---

# Description:
Dynamic programming technique (memoization) with fatorial and Pascal triangle. Dynamic programming is a concept that tends to be quite confusing when it comes to applying it, but memoization (not memorization) is one of the characteristics that identifies it for me. In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.  

### Problem:

Implement pascal's triangle with combinations.

### Recursive factorial function:

#### Example:
 ``` 
    factorial de 4! =  4*3*2*1*0!
    0! = 1
  ```

#### Factorial function with memoization and recursive:
```
function factorialDynamic() {

    let cache = new Map();

    return function factorial(n) {
        if (cache.has(n)) {
            return cache.get(n)
        } else {
            if (n <= 1) return 1;
            cache.set(n, n * factorial(n - 1));
            return cache.get(n);

    }

}
const factorial = factorialDynamic();
```

### Combinatorial function:

##### Example:
```
    Function: (P Q) = P! / (Q!-(P-Q)!)
```
```
function combinatorial(p, q) {
    return (factorial(p) / (factorial(q) * factorial(p - q)));
}
```

### Pascal triangle function:

##### Example:

```
Combinatorial:

fila          (p q)
0             (0 0)
1           (1 0) (1 1)
2        (2 0) (2 1) (2 2)
3     (3 0) (3 1) (3 2) (3 3)
```

##### Row function:
```
function row(p) {

    let row = [];

    for (let q = 0; q <= p; ++q) {
        row.push(combinatorial(p, q));
    }
    return row;

}
```

#### Triangle function (main):
```
function trianglePascal(rows) {

    let triangle = [];

    for (let p = 0; p < rows; ++p) {
        triangle.push(row(p))
    }
    return triangle;
}
```

#### Print funtion (test result):
```
function print(triangle) {

    for (let row of triangle) {
        console.log(row);
    }
}
```
```print(trianglePascal(6));```

```
1              [ 1 ]
2             [ 1, 1 ]
3           [ 1, 2, 1 ]
4         [ 1, 3, 3, 1 ]
5       [ 1, 4, 6, 4, 1 ]
6     [ 1, 5, 10, 10, 5, 1 ]
```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   



 



