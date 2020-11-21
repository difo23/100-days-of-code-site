---
title: "Happy Numbers"
day: "52"
publishDate: "2020-11-21"
thumbnailImage: "../images/day-52.png"
shareText: "Day 52/100 : Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all its digits, it brings us to the number 1 "
hashtags: ["100DaysOfCode",'interview', 'problem', 'js', 'fastandslow']
draft: false
---

# Description:
## Happy Number
Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all its digits, it brings us to the number "1". All other (not happy) numbers will never reach "1". Instead, they will be stuck in a cycle of numbers that does not include "1".

## Example 1:

`num = 23`  

Step #1:  
`2² + 3² = 13`  

Step #2:  
`1² + 3² = 10`  

Step #3:  
`1² + 0² = 1`  

The `23` is a happy number return `true`. 

## Example 2:

`num = 89`  

Step #1:  
`8² + 9² = 145`  

Step #2:  
`1² + 4² + 5² = 42`  

Step #3:  
`4² + 2² = 20`

Step #4:  
`2² + 0² = 4`

Step #5:  
`4²= 16`

Step #6:  
`1² + 6²= 37`

Step #7:  
`3² + 7²= 58`

Step #7:  
`5² + 8²= 89` start the cycle over and over. 


The `89` is a not happy number return `false`. 



## Solution js:

```js

//Fast and Slow 

let happyNumber = (num) => {
    slow = num;
    fast = num;

    while(true){
        slow = sumSq(slow);
        fast = sumSq(sumSq(fast));

        if (slow == fast){
            break;
        }
    }
    return slow == 1;
}


let sumSq = (num) => {

    let sum = 0;

    while (num > 0){
        let dig = num % 10;
        sum += dig ** 2;
        num = Math.floor(num/10);
    }
    return sum; 
}


```



