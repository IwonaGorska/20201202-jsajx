const user = {
    name: 'Kate',
    sayYourName() {
        return this.name;
    }
}

console.log(user);

const user2 = Object.create(user);

console.log(user2);
console.log(user2.name);
console.log(user2.sayYourName());

console.log(Object.getPrototypeOf(user2));