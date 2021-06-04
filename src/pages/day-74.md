---
title: "Remove Duplicate"
day: "53"
publishDate: "2020-11-23"
thumbnailImage: "../images/day-38.png"
shareText: "Day 53/100 : Given an ordered list of numbers, remove all duplicates. You should not use any additional space; after removing duplicates in place, return the length of the subarray that has no duplicate. "
hashtags: ["100DaysOfCode",'interview', 'problem', 'js', 'twopointers']
draft: false
---

# Description:
## Remove Duplicate
Given an ordered list of numbers, remove all duplicates. You should not use any additional space; after removing duplicates in place, return the length of the subarray that has no duplicate.

## Example:

Input:  `list = [3, 4, 4, 4, 4, 7, 7, 7, 9, 9, 9]`   
Output: `4`



## Solution js:

```js

//two 

let removeDuplicate = (list) => {

    let noDup = 1;
    let next = 1;

    while( next <  list.length){

        if(list[noDup-1] != list[next]){
            list[noDup] = list[next];
            ++ noDup;
        }
        ++ next;
    }

    return noDup;

}



```



