---
title: "Counting Valleys"
day: "63"
publishDate: "2021-06-09"
thumbnailImage: "../images/day-63.png"
shareText: "Day 63/100 : An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. "
hashtags: ["100DaysOfCode", 'js', 'node']
draft: false
---

# Description:

## Counting Valleys

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.

- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

- Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

## Example:

Input:  `list = ["U", "D", "D", "D", "U", "D", "U", "U"]`   
Output: `1`



## Solution js:

````js
const counting_valleys = (steps, path) => {

    // Down 
    // Up

    let num_valley = 0;
    let sea_level = 0

    let before = 0;
    let now = 0;
    // 0 is equal, 1 is up, -1 is down
    // D is sea_level - 1
    // U is sea level + 1

    for (let step of path) {

        if (step == 'U') {
            ++sea_level
           
        } else if (step == 'D') {
            --sea_level;
        }

        if (sea_level < 0 ) {
            before = now;
            now = -1;
        } else if (sea_level > 0 ) {
            before = now;
            now = 1;
        } else {
            before = now;
            now = 0; 
        }

        if( now < 0 && before == 0){
            num_valley ++;
        }

    }

    return num_valley;

}


const n = 8;
const path = ["U", "D", "D", "D", "U", "D", "U", "U"];

console.log(counting_valleys(n, path));

````

