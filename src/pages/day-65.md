---
title: "Fetch API"
day: "65"
publishDate: "2021-06-10"
thumbnailImage: "../images/day-65.png"
shareText: "Day 65/100 : Get data from an API using  dinamy programing "
hashtags: ["100DaysOfCode",'interview', 'problem', 'js']
draft: false
---

# Description:
## Fetch API

Get data from an API using  dinamy programing

## Solution js:

```js


//  Endpoint  `https://jsonmock.hackerrank.com/api/countries?page=${num}`
// Input AF --Code
// Output Afghanistan --dame 

const fetch = require("node-fetch");

const fetchPage = () => {

    const cache = {};
    return async (num) => {

        if (num in cache) {
            console.log("is in chache", cache[num].page);
            return cache[num]
        } else {

            try {

                const resp = await fetch(`https://jsonmock.hackerrank.com/api/countries?page=${num}`)
                const json = await resp.json()
                console.log("not in cache", num)
                cache[num] = json;
                return json;

            } catch (e) {
                console.log(e);
                return [];
            }
        }
    }
}

const getPage = fetchPage()

const getCountryNameByCode = async (code) => {

    const validCode = code.toUpperCase();
    const num_pages = 1;


    const { total_pages } = await getPage(`${num_pages}`);
    ;
    for (let i = num_pages; i <= total_pages; i++) {

        const { data } = await getPage(`${i}`);
        let country = data.find(c => c.alpha2Code === validCode);

        if (!!country) return country.name;

    }

    return "not found";
}


getCountryNameByCode("TN").then(name => {
    console.log(name)
    getCountryNameByCode("TN").then(name => {
        console.log(name)
        getCountryNameByCode("AR").then(name => console.log(name))
    })
})


```



