---
title: "O(n*m) staircase with N steps"
day: "39"
publishDate: "2020-09-21"
thumbnailImage: "../images/day-39.png"
shareText: "Day 39/100  Daily Coding Problem: There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time."
hashtags: ["100DaysOfCode",'javascript','coding','problem' ,'bigO', 'interview']
draft: false
---

# Description:



`This problem was asked by Amazon.`

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.


## Example:

For example, if `N` is `4`, then there are `5` unique ways:

* 1, 1, 1, 1
* 2, 1, 1
* 1, 2, 1
* 1, 1, 2
* 2, 2

### Fibonacci:

`N = [0, 1, 2, 3, 4, 5, 6]`  
`Output Ways =   [1, 1, 2, 3, 5, 8, 13]`   
Fibonacci in the output.

## Extra:

What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if `X = [1, 3, 5]`, you could climb `1`, `3`, or `5` steps at a time.



## Solution in JS:

* O(n * m)  
* n --> staircase steps  ( N )
* m --> valid climb up steps ( X.length )

```js

let staircase = (n, X) => {

	// Steps climb up
	let setX = new Set(X)

	// Positions arrays step staircase
	// Included  0  
	let cache = Array(n + 1).fill(0);
	
	// The position 0 is always 1 way.
	cache[0] = 1;
	

    for (let i = 0; i <= n; ++i) {

		let temp = 0;
		
		// Valid Steps add
        for (let x of X) {
            if (i - x > 0) {
                temp += cache[i - x]
            }
		}

		//Update cache.
		cache[i] += temp;
		// position numbers 
		// is included (1) or not (0)
        cache[i] += setX.has(i) ? 1 : 0;
    }

	// The last position in cache have the
	// # of ways.
    return cache.pop();
}



```

## Simple Test:
```js

// Case 1
let X = [1, 2 ];
let n = 4;

console.log(staircase(n, X))

// Case 2 
let X = [1, 3, 5];
let n = 4;

console.log(staircase(n, X))
```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   






