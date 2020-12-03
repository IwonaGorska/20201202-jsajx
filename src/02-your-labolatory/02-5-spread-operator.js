const user = {
    name: 'Marzena',
    name: 'Kornelia'
}

const superUser = {
    role: 'admin'
}

console.log(user);


// user['role'] = superUser.role;
const keyNames = Object.keys(superUser);
console.log(keyNames);

keyNames.forEach((key) => {
    user[key] = superUser[key]
})
// Po 2015 roku wchodzi nowy gracz
// pętla for..of która potrafi iterować po DOWOLNEJ KOLEKCJI ITEROWALNEJ
for(let char of 'HELLO WORLD') {
    console.log(char);
}

for(let key of keyNames) {
    user[key] = superUser[key];
}


console.log(user);

// Co robi Object.assign:
const user2 = {
    name: 'Jacek'
}

const superUser2 = {
    role: 'SuperAdmin'
}

console.log(user2);
// to mutuje: user2
// const user3 = Object.assign(user2, superUser2, {age: 23}, {role: 'user'})
const user3 = Object.assign({}, user2, superUser2, {age: 23}, {role: 'user'})
console.log(user3 === user2);
console.log(user2);
console.log(user3);

const sameUser3 = {
    ...user2,
    ...superUser2,
    role: 'admin',
    // ...{ role: 'user' }
}
console.log(sameUser3);

// Spread operator w tablicach:
const array1 = [1, 2, 3];
const array2 = [10, 11, 12, 13];

const array3 = [array1, array2];
const array4 = [...array1, ...array2];

console.log(array3);
console.log(array4);

console.log(...array1);
console.log(array1[0], array1[1], array1[2], array1[3])
