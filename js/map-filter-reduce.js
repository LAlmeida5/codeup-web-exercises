const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//#2
const resLang = users.filter(user => user.languages.length >= 3);
console.log(resLang);

//longer form than arrow function, still shorter than doing it traditionally.
// const resLang = users.filter(function (user){
//     return user.languages.length >= 3;
// })

//This is so i can visualize what .filter is doing above!
// let resLangBucket = [];
// for (let i = 0; i < users.length; i++) {
//     if(users[i].languages.length >= 3) resLangBucket.push(users[i])
// }

//#3
const getEmail = users.map(user => user.email);
console.log(getEmail);

//#4
const yrsExp = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length;
}, 0);

console.log(yrsExp);

//#5

const longEmail = (previous, user) => {
    if (previous.email.length > user.email.length) {
        return previous;
    }else {
        return user;
    }
}

const longestEmail = users.reduce(longEmail, {email:[]});

console.log(longestEmail);