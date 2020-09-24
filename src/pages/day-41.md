---
title: "Calculate the angle clock"
day: "41"
publishDate: "2020-09-23"
thumbnailImage: "../images/day-41.png"
shareText: "Day 41/100  Daily Coding Problem: Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock."
hashtags: ["100DaysOfCode",'javascript','coding','problem' ,'bigO', 'interview']
draft: false
---

# Description:

Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.


## Example:

`calcAngle(3, 30)`  

>75  

`calcAngle(12, 30)`  
>165


### Algorithm:
   * h cannot be less than 0 or greater than 12
   * m cannot be less than 0 or greater than 60
   
   * h equals 12, h changes to 0
   * m equals 60, m changes to 0
   
     >1 h equals 0.5 degrees traveled (360 / (60 minutes * 12 hours))  

     >1 minute equals 6 degrees traveled (360 / (60 minutes))
   
   * degreesHours = 0.5 * (hours * 60 + minutes)
   * degreesMinutes = 6 * minutes
   
   * angle = absolute (degreesHours - degreesMinutes)
   
   * anguloMinor = max (360 - angle, angle)
   
   * return angleMinor


## Solution in JS:

* O(1)  


```js

let clockGrade = (h, m) => {

	if (h > 12 || h < 0 || m > 60 || m < 0) return 'Error';

	if (h === 12) h = 0;
	if (m === 60) m = 0;
	
	const RELACION_HORAS = 360 / (12 * 60);
	const RELACION_MINUTOS = 360 / 60;

	let gradosHoras = RELACION_HORAS * (h * 60 + m);
	let gradosMinutos = RELACION_MINUTOS * m;

	let angulo = Math.abs(gradosHoras - gradosMinutos);
	
	angulo = Math.min(angulo, 360 - angulo);

	return angulo;
};

```

## Simple Test:
```js
// Case 1
console.log(clockGrade(3, 30));

// Case 2
console.log(clockGrade(12, 30));

```


You can check  
 <a href="https://github.com/difo23/interviewQuestAnsJS" target="_blank"> code </a> by @difo23   





