---
title: "Implement 3 stacks using a single list"
day: "16"
publishDate: "2020-08-24"
thumbnailImage: "../images/day-16.png"
shareText: "Day 15/100  Daily Coding Problem: Implement 3 stacks using a single list."
hashtags: ["100DaysOfCode",'javascript','algorithms' ,'stacks','interview']
draft: false
---

# Description:


## Daily Coding Problem
Good morning! Here's your coding interview problem for today. This problem was asked by Microsoft.

### Problem:

Implement 3 stacks using a single list:

### Example in python:

``` class Stack:
    def __init__(self):
          self.list = []

     def pop(self, stack_number):
         pass

     def push(self, item, stack_number):
         pass
```

### Solution with JS:
```
class Stack {
    constructor(n = 3) {
        this.list = [];
        this._n = n;
        this._index = Array(n).fill(0).map((item, i) => i - n);
    }

    pop(stack) {
        if (this._index[stack - 1] < 0) return null;
        let item = this.list[this._index[stack - 1]];
        this.list[this._index[stack - 1]] = null;
        this._index[stack - 1] -= this._n;
        return item;

    }

    push(item, stack) {
        this._index[stack - 1] += this._n;
        this.list[this._index[stack - 1]] = item;
    }

}
```

### Basic Test:
```
let stack = new Stack();

stack.push('a', 1);
stack.push('b', 1);
stack.push('c', 1);
stack.push('e', 2);
stack.push('d', 3);

console.log(stack.pop(3));
console.log(stack.pop(2));
console.log(stack.pop(2));
```
You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   