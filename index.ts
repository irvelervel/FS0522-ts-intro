let x = 'Stefano'
console.log(x)

let y = 'Riccardo'
console.log(y)

let z = 'Diego'
console.log(z)

// TYPE INFERENCE
let teacher = 'Stefano'
let myNumber = 100
// the : operator assigns a data type to a variable, function etc.

// in TS you can assign manually types with the : operator
// if your variable is being inizialited with a value, TS most of the times
// can automatically figure out the type of the data from it!
// this feature is called TYPE INFERENCE!

// let student: string = 100 // <-- not allower
// teacher = 1 // again, not allowed

// EXPLICIT TYPE ASSIGNMENT
let maybeTrue: boolean = false

// DATA TYPES:
// string
// number
// boolean
// undefined
// null
// any

// THE ANY TYPE
let whatever: any = null
whatever = true
whatever = 'Stefano'
// this is BAD! the "any" type shuts off the TS engine, so you're allowed
// to do again bad practises, mistakes etc.

console.log(teacher.substring(0, 3).length)
console.log(myNumber.toString().slice(0, 1))

maybeTrue = true // <-- value riassignment is always permitted, just like in JS
// what you cannot do is change the type of the value

const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(3, 4))
console.log(addition('3', '4'))

const rightAdditionInJs = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'not numbers!'
  }
}

console.log(rightAdditionInJs(3, 4))
console.log(rightAdditionInJs('3', '4'))

// STRONGLY TYPED ARGUMENTS IN FUNCTIONS
const rightAdditionInTs = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(rightAdditionInTs(3, 4))
// console.log(rightAdditionInTs(3, '4')) // <-- ERROR in compilation
// TS figured out that there's a type mismatch in the function invocation

// UNION TYPES
let mixedVariable: string | number = 'Stefano'
mixedVariable = 30
mixedVariable = 'Gabriele'
// mixedVariable = true // <-- not in the string or number set

// CUSTOM TYPE
type AllStringsAndNumbers = string | number
let mixedVariable2: AllStringsAndNumbers = 20
mixedVariable2 = 'Roberto'

// OPTIONAL ARGUMENTS
const sayHello = (name: string) => {
  return 'Hello, ' + name
}

console.log(sayHello('Stefano'))

const sayHelloV2 = (name: string, greeting: string) => {
  return greeting + ', ' + name
}
console.log(sayHelloV2('Stefano', 'Goodbye'))

const sayHelloV3 = (name: string, greeting?: string) => {
  if (greeting) {
    return greeting + ', ' + name
  } else {
    return 'Hello, ' + name
  }
}
// the arguments marked with the ? are OPTIONAL
// so you can execute your function without them
// technically, they are now allowed to be also "undefined"

console.log(sayHelloV3('Francesco', 'Goodbye'))
console.log(sayHelloV3('Marcello'))

// ARRAYS
let myArrayOfStrings = ['stefano', 'marcello', 'francesco']

// let's assign the type manually
let arrayOfNumbers: number[] = [30, 6, 87]
// another identical way of defining an array of numbers
let anotherArrayOfNumbers: Array<number> = [30, 6, 87]
// they're the same thing, choose your favourite way

arrayOfNumbers.forEach((element) => console.log(element + 5))
let arrayOfStrings: string[] = []
arrayOfStrings.push('stefano')
// arrayOfStrings.push(100) // <-- 100 is not a string :(
arrayOfStrings.push('marcello')
arrayOfStrings.push('what is it')
arrayOfStrings.forEach((el) => console.log(el.toUpperCase()))

// TUPLES
let verySpecificArrays: [string, number, boolean] = ['stefano', 100, true]
let notVerySpecificArray: (number | boolean | string)[] = [true, 50, 'Stefano']
// tuples allow the developer to specify a very precise shape for an array,
// including the type of the elements but also their position in the array

// OBJECTS

let epicodeStudent = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  country: 'UK',
}

console.log(epicodeStudent.country.length === 2)
// console.log(epicodeStudent.track) // <-- instead of getting undefined,
// the compilation of the code stops

// INTERFACES
interface EpicodeTeacher {
  firstName: string
  lastName: string
  areasOfExpertise: string[]
  country: string
  age?: number
  favouriteSoccerPlayer?: string
}

let teacher1: EpicodeTeacher = {
  firstName: 'Mario',
  lastName: 'Rossi',
  areasOfExpertise: ['CSS', 'SASS'],
  country: 'Italy',
}

let teacher2: EpicodeTeacher = {
  firstName: 'Giuseppe',
  lastName: 'Verdi',
  areasOfExpertise: ['React'],
  country: 'Italy',
  age: 35,
}

let arrayOfTeachers: Array<EpicodeTeacher> = []

arrayOfTeachers.push(teacher1)
arrayOfTeachers.push(teacher2)

arrayOfTeachers.forEach((t) =>
  t.areasOfExpertise.forEach((a) => console.log(a.toUpperCase()))
)

console.log(arrayOfTeachers[0].country.length)

teacher2.firstName = 'Stefano'
teacher2.areasOfExpertise.push('Angular')
teacher2.favouriteSoccerPlayer = 'Messi'

interface Animal {
  species: string
  numberOfLegs: number
  canItFly: boolean
  canItSwin: boolean
}

interface Dog extends Animal {
  furColor?: string
}

// now the Dog interface inherits all the properties of the generic Animal
// and adds on top its own properties/methods

const myDog: Dog = {
  species: 'dog',
  numberOfLegs: 4,
  canItSwin: true,
  canItFly: false,
  furColor: 'blonde',
}

// GENERIC
// generics are like parameters for interfaces
// their goal is to make your interface more REUSABLE and RECYCLABLE

interface EpicodeUnit<T> {
  name: string
  assignedTeacher: string
  topic: T
}

const U1: EpicodeUnit<string> = {
  name: 'Unit 1',
  assignedTeacher: 'Eric',
  topic: 'JS Fundamentals',
}

const U2: EpicodeUnit<string[]> = {
  name: 'Unit 2',
  assignedTeacher: 'Stefano',
  topic: ['CSS', 'Adv JS', 'Async JS'],
}

interface Topic {
  topics: string
}

const U3: EpicodeUnit<Topic[]> = {
  name: 'Unit 3',
  assignedTeacher: 'StefanoC',
  topic: [
    {
      topics: 'React, state, props, hooks, router',
    },
    {
      topics: 'Redux, TypeScript',
    },
  ],
}
