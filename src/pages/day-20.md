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

    while (winLeftEnd <= len) {

        /** window Left*/
        if (st[winLeftEnd] === char) {

            pivotLeft = winLeftEnd;
            while (winLeftStart <= pivotLeft) {
                dist[winLeftStart] = pivotLeft - winLeftStart;
                ++winLeftStart;

            }

        } if (!!pivotLeft) {

            if (dist[winLeftEnd]) {
                //End when have first match in dist
                dist[winLeftEnd] =
                    dist[winLeftEnd] < winLeftEnd - pivotLeft ?
                        dist[winLeftEnd] :
                        winLeftEnd - pivotLeft;
                return dist;
            }

            dist[winLeftEnd] = winLeftEnd - pivotLeft;
        }


        /** Window right*/
        if (st[winRightEnd] === char) {

            pivotRight = winRightEnd;
            while (winRightStart >= pivotRight) {

                dist[winRightStart] = winRightStart - pivotRight;
                --winRightStart;
            }

        } else if (!!pivotRight) {

            dist[winRightEnd] = pivotRight - winRightEnd;
        }

        /** Grow Windows*/
        --winRightEnd;
        ++winLeftEnd;
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
