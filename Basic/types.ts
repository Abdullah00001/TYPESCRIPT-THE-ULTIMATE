
// Exploring TypeScripts Basic Types


/* ==================
--------STRING------
====================*/

const userName: string = 'Abdullah Bin Omar Chowdhury';

console.log(userName.toLowerCase());
console.log(userName.length);
console.log(userName.toLocaleUpperCase());

/* ==================
--------NUMBER------
====================*/

const userAge: number = 22;

console.log(userAge.toString());
console.log(userAge);

/* ==================
--------BOOLEAN------
====================*/

const isStudent: boolean = true;

console.log(isStudent);

/* ==================
------UNDEFINED------
====================*/

const workAT: undefined = undefined;

console.log(workAT);

/* ==================
----------NULL------
====================*/

const studyAt: null = null;

console.log(studyAt);

/* ==================
--------ARRAY------
====================*/

const userMarks: number[] = [1, 2, 3, 4];

console.log(userMarks.length);

userMarks.forEach((score) => console.log(score));

const users: string[] = ['abdullah', 'rafi', 'habib'];

console.log(users);
console.log(users.length);

users.forEach((user) => console.log(user.toUpperCase()));
