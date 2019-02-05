// use this to copy code snippets or use your browser's console

// function greet() {
//     console.log(`my name is ${this.name}, hi!`);
// }
//

//
// let person = {
//     name: 'Bob',
//     greet: greet
// };
//


// function greet() {
//     console.log(`my name is ${this.name}, hi!`);
// }
//
// let sally = { name: 'Sally' };
//

// let sally = { name: 'Sally' };
//
// function greet(customerOne, customerTwo) {
//     console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
// }

// let sally = { name: 'Sally' };
//
// function greet(customer) {
//     console.log(`Hi ${customer}, my name is ${this.name}!`);
// }
//
// let newGreet = greet.bind(sally); // newGreet is context-bound to sally

class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    matchInterests(event) {
      return event.keywords.some(word => this.interests.includes(word));
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);
