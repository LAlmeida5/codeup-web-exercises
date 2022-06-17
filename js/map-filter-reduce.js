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

//This is so I can visualize what .filter is doing above!
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

const longEmail = users.reduce((total, user) => {
    let data = user.email.length - total;
    if (data === user.email.length) {
        return user;
    } else {
        return user.email;
    }
}, users[0]);

console.log(longEmail);

//#6

const instructorIntros = users.reduce((string, user, index) => {
    if (index === users.length - 1) {
        return `${string}and ${user.name}.`;
    } else {
        return `${string}${user.name}, `;
    }
}, "Here are your cohort instructors: ");

console.log(instructorIntros);


// ***Bonus: copied from walk-through for reference purposes only.***
// David's code

const uniqueLangs = users.reduce((langs, user) => {
    for (let lang of user.languages) {
        if (!langs.includes(lang)) { // langs.includes(lang) === false
            langs.push(lang);
        }
    }
    return langs;
}, []);

console.log(uniqueLangs);

const davidsCoolWayToGetUniqueLanguages = Array.from(new Set(users.reduce((langs, user) => {
            for (let lang of user.languages) {
                langs.push(lang);
            }
            return langs;
        }, [])
    )
);

console.log(davidsCoolWayToGetUniqueLanguages);





