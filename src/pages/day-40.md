---
title: "Fruits in each basket"
day: "40"
publishDate: "2020-09-22"
thumbnailImage: "../images/day-40.png"
shareText: "Day 40/100  Daily Coding Problem: Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit"
hashtags: ["100DaysOfCode",'javascript','coding','problem' ,'bigO', 'interview']
draft: false
---

# Description:

Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

## Example:

`Input: Fruit = ['A', 'B', 'C', 'A', 'C']`
`Output: 3`

Explanation: We can put `2 'C'` in one basket and one `'A'` in the other from the subarray `['C', 'A', 'C']`

`Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']`
`Output: 5`

Explanation: We can put `3 'B'` in one basket and  ` 2 'C'` in the other basket. 
This can be done if we start with the second letter: `['B', 'C', 'B', 'B', 'C']`


## Solution in JS:

* O(n)  


```js


let fruitBasket = (arr)=>{
    let k = 2; //BASKET
    let frecuencyFruit = {};
    let start = 0; // WINDOW START 
    let max = 0; 

    for(let end = 0 ; end < arr.length; end++){
        
		let endFruit = arr[end];
		// FRECUENCY FRUIT COUNT
        if(!(endchar in frecuencyFruit)){
            frecuencyFruit[endFruit] = 0;
        }

        frecuencyFruit[endFruit] +=1;

		// FULL BASKET
		// WINDOW CHANGE OUT
        while(Object.keys(frecuencyFruit).length > k){

            let startFruit =  arr[start];
            frecuencyFruit[startFruit] -= 1;
            if(frecuencyFruit[startFruit] === 0){
				//DELETE FRUIT OUT OF WINDOW
                delete frecuencyFruit[startFruit];
            }
            start += 1;
        } 

        max = Math.max(max, end -start +1);
    }

    return max;
}

```

## Simple Test:
```js

// Case 1
let fruit=['A', 'B', 'C', 'A', 'C']

console.log(fruitBasket(fruit))

```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   
