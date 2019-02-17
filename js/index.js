
function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

greet(); // my name is , hi!

let person = {
    name: 'Bob',
    greet: greet
};

person.greet(); // my name is Bob, hi!

greet.apply(person)
greet.call(person)

// call and apply methods

function greet() {
    console.log(`my name is ${this.name}, hi!`);
}

let sally = { name: 'Sally' };

// we can use call or apply to invoke a function with a specified context. The context in which the function is to be run is passed in as the first argument to these methods.

greet.call(sally);
// my name is Sally, hi!

greet.apply(sally);
// my name is Sally, hi!


//
// Passing Arguments With call and apply
// let sally = { name: 'Sally' };

function greet(customerOne, customerTwo) {
    console.log(`Hi ${customerOne} and ${customerTwo}, my name is ${this.name}!`);
}

// greet.call(sally, 'Terry', 'George');
greet.apply(sally, ['Terry', 'George']);
greet.bind(sally)('Bob');


greet.bind(sally)('Bob');


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
        return event.keywords.some(
            function(word) {
                return this.interests.includes(word);
            }.bind(this) // added to the and of the callback function
        );
    }
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

billy.matchInterests(freeMusic);

// matchInterests(event) {
//   return event.keywords.some(word => this.interests.includes(word));
// }
