---
title: "Firestore Insert"
day: "56"
publishDate: "2020-11-26"
thumbnailImage: "../images/day-56.png"
shareText: "Day 56/100 : Let Cloud Firestore auto-generate an ID using add(). "
hashtags: ["100DaysOfCode",'firestore', 'insert', 'js', 'node']
draft: false
---

# Description:

Let Cloud Firestore auto-generate an ID using add().
```js
// Add a new document with a generated id.
db.collection("cities").add({
    name: "Tokyo",
    country: "Japan"
});
```