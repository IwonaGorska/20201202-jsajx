const obj = {};


// obj = '1233';

console.log(obj);


// My user:
// BAD:
var user;
// VERY BAD:
var user = null;

// GOOD:
// Deklarowanie swoich intencji za wczasu:
var user = {
    name: '',
    role: '',
    isAdmin: false
}



/// 50000 lini dalej
user = {
    name: 'Michal',
    role: 'admin',
    isAdmin: true
}


