---
title: "Firestore Config"
day: "54"
publishDate: "2020-11-24"
thumbnailImage: "../images/day-54.png"
shareText: "Day 54/100 : Firestore configuration first step with nodejs. "
hashtags: ["100DaysOfCode",'firebase', 'node', 'js']
draft: false
---

# Description:
Cloud Firestore is a flexible and scalable database for programming on servers,   
mobile devices, and the web from Firebase and Google Cloud Platform.   
Like Firebase Realtime Database, it keeps your data in sync between client applications through     listeners in real time and offers offline support for mobile devices and the web, so you can build    responsive applications that work regardless of network latency or Internet connectivity. Cloud    Firestore also offers seamless integration with other Firebase and Google Cloud Platform products,      including Cloud Functions.   

```js
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();
```



