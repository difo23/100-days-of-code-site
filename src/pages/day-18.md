---
title: "Technique Two Pointers and memoization."
day: "18"
publishDate: "2020-08-26"
thumbnailImage: "../images/day-18.png"
shareText: "Day 18/100 Daily Coding Problem:  Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices."
hashtags: ["100DaysOfCode",'javascript','algorithms' ,'twopointer', 'memoization', 'coding', 'problem', 'interview', 'technique', 'findNearestLarger']
draft: false
---

Coding Problem:  Given an array of numbers and an index i, return the index of the nearest larger number of the number at index i, where distance is measured in array indices.

## Example:
For example, given `[4, 1, 3, 5, 6]` and index `0`, you should return `3`.

## Conditions:
1) If two distances to larger numbers are the equal, then return `any one of them`.
2) If the  array  at i doesn't have a nearest larger integer, then return `null`.

## Extra:
* Follow-up: If you can preprocess the array, can you do this in constant time?


## Problem solution: 

 1) Technique: Two Pointers(in this case not order array)
 
 ```js   
const findNearestLarger = (idx, arr) => {

    const value = arr[idx], len = arr.length;

    //Two pointers start with the same value
    let [down, up] = [idx, idx]

    while (++up < len || --down >= 0) {
        //  condition 1
        if (down >= 0 && arr[down] > value) { return down }
        if (up < len && arr[up] > value) { return up }
    }
    // condition 2
    return null;
 }

```

### Extra O(1) with preprocessing and memoization:


```js

function dynamic() {

    let cache = new Map();
    let ant_arr = [];

    const preprocessing = findNearestLarger;


    return function nearestLarger(idx, arr) {

        // Compare previous arr with new arr received
        if (JSON.stringify(ant_arr) === JSON.stringify(arr)) {
            //Follow-up: If you can preprocess the array,
            // can you do this in constant time?
            return cache.get(idx);

        } else {

            // Update the new matrix for the first time
            ant_arr = arr;
            //Preprocessing
            for (let i = 0; i < ant_arr.length; i++) {
                cache.set(i, preprocessing(i, ant_arr));
            }
            // result
            return cache.get(idx);
        }

    }
}


```

### Simple test:

```js

let arr = [4, 1, 3, 5, 6];
let idx = 0; // you should return 3.

let fastNearestLarger = dynamic();

console.log(fastNearestLarger(0, [4, 1, 3, 5, 6]))

```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   



 