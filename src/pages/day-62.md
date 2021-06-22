---
title: "Sales Match"
day: "62"
publishDate: "2021-06-08"
thumbnailImage: "../images/day-62.png"
shareText: "Day 62/100 : There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. "
hashtags: ["100DaysOfCode", 'js']
draft: false

---

# Description:

## Sales Match

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

## Example:

Input:  `list = [1, 1, 1, 3, 3, 4, 1, 4]`   
Output: `4`



## Solution js:

```js


const salesMatch = (n, socks) => {

    let start = 0;
    let end = 1;
    let pair = 0;

    if ( n < 1 || n > 100 ) return "Invalid input"
    let sort_socks = socks.sort();

    while (end < n) {

        if ( sort_socks[start] < 1 || sort_socks[start] > 100 ) return "Invalid input"

        if (sort_socks[start] == sort_socks[end]) {
            start = start + 2;
            end = start + 1;
            pair++
        } else {
            start++;
            end++;
        }
    }

    return pair;

}

const socks = [1, 1, 1, 3, 3, 4, 1, 4]

const n = socks.length;

console.log("Num of pairs: ", salesMatch(n, socks))

```



