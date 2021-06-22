---
title: "Pattern: Sliding Window"
day: "77"
publishDate: "2021-06-23"
thumbnailImage: "../images/day-77.png"
shareText: "Day 77/100 : Pattern: Sliding Window Given an array of positive numbers and a positive number ‘S,’ find the length of the **smallest contiguous subarray whose sum is greater than or equal to ‘S’**. Return 0 if no such subarray exists."
hashtags: ["100DaysOfCode",'interview']
draft: false
---

##### Pattern: Sliding Window

Given an array of positive numbers and a positive number ‘S,’ find the length of the **smallest contiguous subarray whose sum is greater than or equal to ‘S’**. Return 0 if no such subarray exists.

**Example 1:**

```
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].
```

**Example 2:**

```
Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].
```

**Example 3:**

```
Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] 
or [1, 1, 6].
```

```js
    
function max_sub_array_of_size_k(k, arr) {
  
    let maxSum = 0, windowSum = 0, windowStart = 0;

  for (window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end]; // add the next element
      
    // slide the window, we don't need to slide if we've not hit 
    //the required window size of 'k'
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }
  return maxSum;
}


console.log(`Maximum sum of a subarray of size K: 
	${max_sub_array_of_size_k(
    	3, 
    	[2, 1, 5, 1, 3, 2]
	)}`);

console.log(`Maximum sum of a subarray of size K: 
	${max_sub_array_of_size_k(
    	2, 
    	[2, 3, 4, 1, 5]
	)}`);
```