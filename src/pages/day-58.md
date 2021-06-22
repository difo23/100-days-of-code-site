---
title: "Titanic Tutorial"
day: "58"
publishDate: "2021-06-04"
thumbnailImage: "../images/day-58.png"
shareText: "Day 58/100 : "
hashtags: ["100DaysOfCode",'kaggle', 'titanic', 'python', 'notebook']
draft: false
---

# Description:

Today we start our first competition in kaggle, the project consists of analyzing certain data related to the titanic. I consider kaggle a personal challenge in my training as a DS and a social network full of learning. We are going to be part of the kaggle community.

[Notebook in kaggle](https://www.kaggle.com/lizandroramrezdifo/titanic-first-comp)

### The Challenge

The sinking of the Titanic is one of the most infamous shipwrecks in history.

On April 15, 1912, during her maiden voyage, the widely considered “unsinkable” RMS Titanic sank after colliding with an iceberg. Unfortunately, there weren’t enough lifeboats for everyone onboard, resulting in the death of 1502 out of 2224 passengers and crew.

While there was some element of luck involved in surviving, it seems some groups of people were more likely to survive than others.

In this challenge, we ask you to build a predictive model that answers the question: “what sorts of people were more likely to survive?” using passenger data (ie name, age, gender, socio-economic class, etc).

## Data Description

The data has been split into two groups:

- training set (train.csv)
- test set (test.csv)

**Note**: This is important for the models.

### Data Dictionary

| **Variable** | **Definition**                             |                           **Key**                            |
| :----------- | :----------------------------------------- | :----------------------------------------------------------: |
| survival     | Survival                                   |                       0 = No, 1 = Yes                        |
| pclass       | Ticket class                               |                  1 = 1st, 2 = 2nd, 3 = 3rd                   |
| sex          | Sex                                        |                                                              |
| Age          | Age in years                               | Age is fractional if less than 1. If the age is estimated, is it in the form of xx.5 |
| sibsp        | # of siblings / spouses aboard the Titanic |                                                              |
| parch        | # of parents / children aboard the Titanic |                                                              |
| ticket       | Ticket number                              |                                                              |
| fare         | Passenger fare                             |                                                              |
| cabin        | Cabin number                               |                                                              |
| embarked     | Port of Embarkation                        |        C = Cherbourg, Q = Queenstown, S = Southampton        |



## Install Kaggle API

- Install kaggle in you pc

  ```bash
   pip install --user kaggle 
  ```

- Download API Token from you account in kaggle, save the file `file: kaggle.json` in `~/,kaggle` 

- Change permmisions 

  ```bash
  chmod 600 /home/digdata/.kaggle/kaggle.json
  ```

- Move to work dir and download titanic data with kaggle API

  ```bash
  kaggle competitions download -c titanic
  
  ```

  Note: Commands of Kaggle API

  ```bash
  kaggle competitions {list, files, download, submit, submissions, leaderboard}
  kaggle datasets {list, files, download, create, version, init}
  kaggle kernels {list, init, push, pull, output, status}
  kaggle config {view, set, unset}
  ```

## Your first machine learning model

We'll build what's known as a **random forest model**. This model is constructed of several "trees" (there are three trees in the picture below, but we'll construct 100!) that will individually consider each passenger's data and vote on whether the individual survived. Then, the random forest model makes a democratic decision: the outcome with the most votes wins!

![img](https://i.imgur.com/AC9Bq63.png)

