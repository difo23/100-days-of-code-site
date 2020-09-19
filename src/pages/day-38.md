---
title: "O(n) 3 unique numbers"
day: "38"
publishDate: "2020-09-18"
thumbnailImage: "../images/day-38.png"
shareText: "Day 38/100  Daily Coding Problem: Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time."
hashtags: ["100DaysOfCode",'javascript','coding_problem' ,'O(n)', 'interview']
draft: false
---

# Description:


 Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

## Example:

`Input: [3, 3, 2, 1, 3, 2, 1]`
`Output: [1, 1, 2, 2, 3, 3, 3]`

## Solution in JS:

```js

let threeUniqueNumbers = (nums) => {
	let arr = [[], [], []];

	for (num of nums) {
		arr[num - 1].push(num);
	}

	return [].concat(...arr);
};

```

## Simple Test:
```js
let nums = [3, 3, 2, 1, 3, 2, 1];

console.log(threeUniqueNumbers(nums));
```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   






