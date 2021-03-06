"use strict";
(function(){

let userInput = prompt("Enter your username")

const getCommitEvent = (userInput) => {
    //This is how you grab what the user enters and attach it in the url
    const URL = `https://api.github.com/users/${userInput}/events/public`;
    fetch(URL, {headers: {Authorization: `token ${PROMISES_GH_KEY}`}})
        .then((resp) => resp.json())
        .then((data) => {
            console.log(`${data[0].created_at}`)
            let userInfo = `Username: ${data[0].actor.login} Last Commit: ${data[0].created_at.substring(0,10)}`;
            let comMsg= `Commit Message: ${data[0].payload.commits[0].message}`
            console.log(userInfo);
            document.getElementById('first').append(userInfo)
            document.getElementById('second').append(comMsg)
        })
        .catch(error => console.error(error))
    };
   getCommitEvent(userInput);
}());
