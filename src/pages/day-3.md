---
title: "Simple Login with useContext hooks"
day: "3"
publishDate: "2020-08-11"
thumbnailImage: "../images/day-3.png"
shareText: "Learning about useContext hooks. 😊"
hashtags: ["100DaysOfCode", "Contex",'React', 'Hooks', 'useContext', 'useHistory', 'React Router Dom', 'useState']
draft: false
---

# Simple LoginApp with useContext hooks.


## Notes:
_____________________________________________   
* Global data in React JS.
* Exchange data between components without props method.

## React useContext hooks:
____________________________________________

### The login problem:

#### Description: 
This problem is about exchanged user data between brothers component into a simple app. The objective is only to use the concept about context in react using hooks.



#### Step 1. 

The first thing to do is create a context that you want to share between all yours components. Create    `UserContext.js` file.



>`const  UserContext = React.createContext(initialValue);`

>`export default UserContext;`


#### Step 2. 

Later you need to wrap the father of all componentes between `UserContext.Provider` High Order Component (HOC). You can do this in `Main.js` .


* Create `useState` hook:  
`const [user, setUser] = useState({});`

* Create `userInfo` objet:  
`const userInfo = {
    user,
    setUser
};`


* Use the `userInfo` object in the `value` props:  
   
>>`<UserContext.Provider value= { userInfo }>`  

>>>`<ChildrensComponents />`   

>>`</UserContext.Provider>`

>#### Note: 
> The userInfo is object and you can save functions and others js stuffs that you need more forward.


#### Step 3. 

 Finally you can import `UserContext` in all you components, here into in action the useContext hooks. This hooks need the `UserContext` like initial props.

>`const {user, setUser} = useContext(UserContext);`

You can check out <a href="https://difo23.github.io/hooks-app/" target="_blank"> Github page </a> code <a href= 'https://github.com/difo23/hooks-app'> by @difo23 </a> 