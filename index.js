var x = 'Stefano';
console.log(x);
var y = 'Riccardo';
console.log(y);
var z = 'Diego';
console.log(z);
// TYPE INFERENCE
var teacher = 'Stefano';
var myNumber = 100;
// the : operator assigns a data type to a variable, function etc.
// in TS you can assign manually types with the : operator
// if your variable is being inizialited with a value, TS most of the times
// can automatically figure out the type of the data from it!
// this feature is called TYPE INFERENCE!
// let student: string = 100 // <-- not allower
// teacher = 1 // again, not allowed
// EXPLICIT TYPE ASSIGNMENT
var maybeTrue = false;
// DATA TYPES:
// string
// number
// boolean
// undefined
// null
// any
// THE ANY TYPE
var whatever = null;
whatever = true;
whatever = 'Stefano';
// this is BAD! the "any" type shuts off the TS engine, so you're allowed
// to do again bad practises, mistakes etc.
console.log(teacher.substring(0, 3).length);
console.log(myNumber.toString().slice(0, 1));
maybeTrue = true; // <-- value riassignment is always permitted, just like in JS
// what you cannot do is change the type of the value
var addition = function (num1, num2) {
    return num1 + num2;
};
console.log(addition(3, 4));
console.log(addition('3', '4'));
var rightAdditionInJs = function (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return 'not numbers!';
    }
};
console.log(rightAdditionInJs(3, 4));
console.log(rightAdditionInJs('3', '4'));
// STRONGLY TYPED ARGUMENTS IN FUNCTIONS
var rightAdditionInTs = function (num1, num2) {
    return num1 + num2;
};
console.log(rightAdditionInTs(3, 4));
// console.log(rightAdditionInTs(3, '4')) // <-- ERROR in compilation
// TS figured out that there's a type mismatch in the function invocation
// UNION TYPES
var mixedVariable = 'Stefano';
mixedVariable = 30;
mixedVariable = 'Gabriele';
var mixedVariable2 = 20;
mixedVariable2 = 'Roberto';
// OPTIONAL ARGUMENTS
var sayHello = function (name) {
    return 'Hello, ' + name;
};
console.log(sayHello('Stefano'));
var sayHelloV2 = function (name, greeting) {
    return greeting + ', ' + name;
};
console.log(sayHelloV2('Stefano', 'Goodbye'));
var sayHelloV3 = function (name, greeting) {
    if (greeting) {
        return greeting + ', ' + name;
    }
    else {
        return 'Hello, ' + name;
    }
};
// the arguments marked with the ? are OPTIONAL
// so you can execute your function without them
// technically, they are now allowed to be also "undefined"
console.log(sayHelloV3('Francesco', 'Goodbye'));
console.log(sayHelloV3('Marcello'));
// ARRAYS
var myArrayOfStrings = ['stefano', 'marcello', 'francesco'];
// let's assign the type manually
var arrayOfNumbers = [30, 6, 87];
// another identical way of defining an array of numbers
var anotherArrayOfNumbers = [30, 6, 87];
// they're the same thing, choose your favourite way
arrayOfNumbers.forEach(function (element) { return console.log(element + 5); });
var arrayOfStrings = [];
arrayOfStrings.push('stefano');
// arrayOfStrings.push(100) // <-- 100 is not a string :(
arrayOfStrings.push('marcello');
arrayOfStrings.push('what is it');
arrayOfStrings.forEach(function (el) { return console.log(el.toUpperCase()); });
// TUPLES
var verySpecificArrays = ['stefano', 100, true];
var notVerySpecificArray = [true, 50, 'Stefano'];
// tuples allow the developer to specify a very precise shape for an array,
// including the type of the elements but also their position in the array
// OBJECTS
var epicodeStudent = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    country: 'UK'
};
console.log(epicodeStudent.country.length === 2);
var teacher1 = {
    firstName: 'Mario',
    lastName: 'Rossi',
    areasOfExpertise: ['CSS', 'SASS'],
    country: 'Italy'
};
var teacher2 = {
    firstName: 'Giuseppe',
    lastName: 'Verdi',
    areasOfExpertise: ['React'],
    country: 'Italy',
    age: 35
};
var arrayOfTeachers = [];
arrayOfTeachers.push(teacher1);
arrayOfTeachers.push(teacher2);
arrayOfTeachers.forEach(function (t) {
    return t.areasOfExpertise.forEach(function (a) { return console.log(a.toUpperCase()); });
});
console.log(arrayOfTeachers[0].country.length);
teacher2.firstName = 'Stefano';
teacher2.areasOfExpertise.push('Angular');
teacher2.favouriteSoccerPlayer = 'Messi';
// now the Dog interface inherits all the properties of the generic Animal
// and adds on top its own properties/methods
var myDog = {
    species: 'dog',
    numberOfLegs: 4,
    canItSwin: true,
    canItFly: false,
    furColor: 'blonde'
};
var U1 = {
    name: 'Unit 1',
    assignedTeacher: 'Eric',
    topic: 'JS Fundamentals'
};
var U2 = {
    name: 'Unit 2',
    assignedTeacher: 'Stefano',
    topic: ['CSS', 'Adv JS', 'Async JS']
};
var U3 = {
    name: 'Unit 3',
    assignedTeacher: 'StefanoC',
    topic: [
        {
            topics: 'React, state, props, hooks, router'
        },
        {
            topics: 'Redux, TypeScript'
        },
    ]
};
