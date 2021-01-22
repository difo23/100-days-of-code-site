---
title: "Firestore update"
day: "57"
publishDate: "2020-11-27"
thumbnailImage: "../images/day-57.png"
shareText: "Day 57/100 :  "
hashtags: ["100DaysOfCode",'firestore', 'update', 'js', 'node']
draft: false
---

# Description:


```js
// Set the "capital" field of the city 'DC'
db.collection("cities").doc("DC").update({
    capital: true
});
```

## Update fields in nested objects

```js
// Create an initial document to update.
var frankDocRef = db.collection("users").doc("frank");
frankDocRef.set({
    name: "Frank",
    favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    age: 12
});
// To update age and favorite color:
db.collection("users").doc("frank").update({
    "age": 13,
    "favorites.color": "Red"
});

```