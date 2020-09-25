---
title: "Unique elements with ASCII"
day: "42"
publishDate: "2020-09-24"
thumbnailImage: "../images/day-42.png"
shareText: "Day 42/100  Daily Coding Problem: You must check that the elements of this string are unique (that they do not repeat themselves)."
hashtags: ["100DaysOfCode",'javascript','python', 'ASCII','problem' ,'bigO', 'interview']
draft: false
---

# Description:
You must check that the elements of this string are unique (that they do not repeat themselves).


## Example:


`st = 'Hello'`
`return true`

`st = 'Welcome'`
`return false`

`st = 'WelcomE'`
`return true`



## ASCII Solution in JS:

* O(n)  


```js

let uniqueASCII = (st) => {
    const ASCII_CHAR = 128;
    
    let arr = new Array(ASCII_CHAR);
    let code;
    for (v of st){
        code = v.charCodeAt();
        if(arr[code]){
            return false;
        }
        arr[code] = true;
    }

    return true//

}


```
## Other solutions in JS:

```js
let unique = (st) => {

    const find = st.split('').find((char, i, arr) => arr.slice(i + 1).includes(char))
    return find ? false : true;
}

```


### Python Count solution:

```py

def unique(st):
  for ch in st:
    if(st.count(ch) > 1):
      return False
  return True

```



## Simple Test:
```js
let st = 'holunt';
console.log(uniqueASCII(st))

```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   






