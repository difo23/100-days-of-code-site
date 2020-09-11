---
title: "The dining philosophers problem "
day: "33"
publishDate: "2020-09-10"
thumbnailImage: "../images/day-33.png"
shareText: "Day 33/100 Daily Coding Problem:  The dining philosophers problem is an example problem often used in concurrent algorithm design to illustrate synchronization issues and techniques for resolving them."
hashtags: ["100DaysOfCode",'python','algorithms' ,'concurrent', 'problem', 'philosophers', 'technique']
draft: false
---

# Coding Problem: 

Five silent philosophers sit at a round table with bowls of spaghetti. Forks are placed between each pair of adjacent philosophers.

Each philosopher must alternately think and eat. However, a philosopher can only eat spaghetti when they have both left and right forks. Each fork can be held by only one philosopher and so a philosopher can use the fork only if it is not being used by another philosopher. After an individual philosopher finishes eating, they need to put down both forks so that the forks become available to others. A philosopher can only take the fork on their right or the one on their left as they become available and they cannot start eating before getting both forks.

Eating is not limited by the remaining amounts of spaghetti or stomach space; an infinite supply and an infinite demand are assumed.

The problem is how to design a discipline of behavior (a concurrent algorithm) such that no philosopher will starve; i.e., each can forever continue to alternate between eating and thinking, assuming that no philosopher can know when others may want to eat or think.
 
## Example:

[More Info..](https://en.wikipedia.org/wiki/Dining_philosophers_problem)



## Problem solution: 

As a challenge, I am going to study a solution made in Python, with the aim of reviewing the problem and then reproducing the solution in a programming language that I have not used for a long time. On the 34th I will implement this solution using code in Ada Programming Language.



You can check  
 <a href="https://github.com/difo23/problema_filosofos_ADA" target="_blank"> code </a> by @difo23   
