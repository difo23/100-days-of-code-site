---
title: "Technique Sliding Windows algorithms"
day: "20"
publishDate: "2020-08-28"
thumbnailImage: "../images/day-20.png"
shareText: "Day 20/100 Daily Coding Problem:  Given a string s and a character c find hte distance for all characters in hte string to hte character c in hte string s. You can assume htat hte character c will appear at least once in hte string."
hashtags: ["100DaysOfCode",'javascript','algorithms' ,'slidingwindow', 'problem', 'interview', 'technique', 'shortestdist']
draft: false
---

Coding Problem:  Given a string s and a character c, find hte distance for all characters in hte string to hte character c in hte string s. You can assume htat hte character c will appear at least once in hte string. This problem was recently asked by Uber.

## Example:
For example, given `shortest_dist('helloworld', 'l')` , you should return `[2, 1, 0, 0, 1, 2, 2, 1, 0, 1]`.  



## Problem solution: 

 1) Technique: Sliding Windows (in this case two windows right and left)
 
 ```js   
function shortestDist(st, char) {

    let len = st.length - 1
    let [
        winLeftStart,
        winLeftEnd,
        winRightStart,
        winRightEnd
    ] = [0, 0, len, len];
    let [pivotLeft, pivotRight] = [null, null];
    let dist = [];
    let iter = 0;

    while (winLeftEnd <= len) {

        // window Left
        if (st[winLeftEnd] === char) {

            pivotLeft = winLeftEnd;
            while (winLeftStart <= pivotLeft) {
                ++iter;
                if (!dist[winLeftStart]) {

                    dist[winLeftStart] = pivotLeft - winLeftStart;
                }
                ++winLeftStart;

            }
        } else {

            if (!!pivotLeft) {
                let abs = winLeftEnd - pivotLeft;

                if (dist[winLeftEnd]) {
                    //End when have frist match in dist
                    dist[winLeftEnd] = dist[winLeftEnd] < abs ? dist[winLeftEnd] : abs;
                    return { dist, iter };
                }

                dist[winLeftEnd] = abs;

            }
        }


        // Window right
        if (st[winRightEnd] === char) {

            pivotRight = winRightEnd;
            while (winRightStart >= pivotRight) {
                ++iter;
                if (!dist[winRightStart]) {

                    dist[winRightStart] = winRightStart - pivotRight;

                }
                --winRightStart;
            }

        } else {

            if (!!pivotRight) {

                dist[winRightEnd] = pivotRight - winRightEnd;

            }

        }

        // New pointers 
        --winRightEnd;
        ++winLeftEnd;

        // Iterations for testing
        ++iter;

    }

}


```



### Simple test:

```js

console.log(shortestDist('helloworld', 'l'))
                     
           
//        h  e  l  l  o  w  o  r  l  d
// resp. [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]
//        0  1  2  3  4  5  6  7  8  9

```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   
