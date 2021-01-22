---
title: "Firestore conections"
day: "55"
publishDate: "2020-11-25"
thumbnailImage: "../images/day-55.png"
shareText: "Day 55/100 : A connection is a user interacting with Firebase"
hashtags: ["100DaysOfCode",'firestore', 'conections', 'js', 'node']
draft: false
---

# Description:
In Firebase, a connection is a user interacting with Firebase, and a connection opens when a user opens the app, and closes when the user leaves the app. This means that to hit the 100 connection cap, 100 users must have the app open at the same time.

```js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


var firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    authDomain: "cemasclient.firebaseapp.com",
    projectId: "cemasclient",
    storageBucket: "cemasclient.appspot.com",
    messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXX",
    measurementId: "G-Q13JXH5S0P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
```
