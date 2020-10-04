---
title: "TwoAdd Problem"
day: "46"
publishDate: "2020-10-03"
thumbnailImage: "../images/day-46.png"
shareText: "Day 44/100  Daily Coding Problem::Given an array of integers, return indices of the two numbers such that they add up to a specific target.You may assume that each input would have exactly one solution, and you may not use the same element twice. "
hashtags: ["100DaysOfCode",'javascript','coding','problem' ,'bigO', 'interview']
draft: false
---

# Description:
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.



## Example:  

Given `nums = [2, 7, 11, 15], target = 9`

Because `nums[0] + nums[1] = 2 + 7 = 9`
return `[0, 1]`.

### Definition:
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}


## Code:


```js

var twoSum = function (nums, target) {
	const mins = nums.filter((num) => nums.includes(target - num));
	const one = mins[0];
	const two = mins.find((min) => min + one == target);
	return [nums.indexOf(one), nums.indexOf(two)];
};

```

```js
let twoSumOn = (arr, target) => {
	//first thing is sorted my arr
	let arrSorted = [...arr].sort((a, b) => a - b);
	let left = 0;
	let currentSum = 0;

	let rigth = arrSorted.length - 1;

	//explore my arr from lef and rigth index element
	while (left < rigth) {
		currentSum = arrSorted[left] + arrSorted[rigth];

		if (currentSum === target) {

			return [left, rigth];
		}

		if (currentSum > target) {
			rigth -= 1;
		} else {
			left += 1;
		}
	}

	return [-1, -1];
};


```

```js
const twoSumHash = (arr, target) => {
	
	let arrMap = new Map();

	for (let i = 0; i < arr.length; ++i) {
		
		if (arrMap.has(target - arr[i])) {
			let x = arrMap.get(target - arr[i]);
			return [x, i];
		} else {
			arrMap.set(arr[i], i);
		}
	}
};



```

```js
const twoSumHashObjet = (arr, target) => {

	let hash = {}

	for (let i = 0; i < arr.length; ++i) {
		if ((target - arr[i]) in hash) {
			let x = hash[target - arr[i]];
			return [x, i];
		} else {
			hash[arr[i]] = i;
		}
	}

	return [-1, -1];

}


```

## Test:

```js

console.log(twoSumHashObjet([2, 6, 4, 11, 7], 9));


```

You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   
















