// 👑 1. Pure function
function addPure(a, b) {
  return a + b;
}

console.log("✅ Pure function:", addPure(1, 6));

// 👑 2. Avoid side effect
const b = 1;
function addSideEffect(a) {
  return a + b;
}

console.log("❌ Side effect:", addSideEffect(1));

// 👑 3. First class function
// 3.1 Assigning a function to a variable
const addAssigningFunc = function addAssigning(a, b) {
  return a + b;
};

console.log("✅ Assigning Func:", addAssigningFunc(1, 6));

// 3.2 Returning a function
function addReturning(a, b) {
  return function () {
    return a + b;
  };
}

const executeAddTwoNumber = addReturning(1, 6);
console.log("✅ Returning Func:", executeAddTwoNumber());

// 3.3 Accepting a function as an argument
function addNumber(a, b) {
  return a + b;
}
function addAccepting(callback, a, b) {
  return callback(a, b);
}

console.log(
  "✅ Accepting Func:",
  addAccepting((a, b) => a + b, 1, 6)
);

// 👑 4. Higher order function
// 4.2 Returning a function
// 4.3 Accepting a function as an argument
const persons = [
  { name: "John", age: 17 },
  { name: "Jane", age: 10 },
  { name: "Jim", age: 15 },
];
// filter
// Normally
// const kids = [];
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age <= 15) {
//     kids.push(person);
//   }
// }

const kids = persons.filter((person) => person.age <= 15);

console.log("✅ Filter Kids:", kids);
// map
// Normally
// const olderPersons = [];
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   olderPersons.push({ ...person, age: person.age * 2 });
// }

const olderPersons = persons.map((person) => ({
  ...person,
  age: person.age * 2,
}));
console.log("✅ Map olderPersons:", olderPersons);

// reduce
// Normally
// let totalAge = 0;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   totalAge += person.age;
// }

const totalAge = persons.reduce((totalAge, person) => totalAge + person.age, 0);
console.log("✅ Reduce ages:", totalAge);

// forEach
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age > 15) continue;
//   console.log(`${person.name}, ${person.age}`);
// }

persons.forEach((person) => console.log(`${person.name}, ${person.age}`));

// find, findIndex
// let jane;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.name === "Jane") {
//     jane = person;
//     break;
//   }
// }

const jane = persons.find((person) => person.name === "Jane");
const janeIndex = persons.findIndex((person) => person.name === "Jane");
console.log("✅ Find Jane:", jane);
console.log("✅ FindIndex Jane:", janeIndex);

// every, some
// let isKid = true;
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i];
//   if (person.age > 15) {
//     isKid = false;
//     break;
//   }
// }

const isEveryoneKid = persons.every((person) => person.age <= 15);
console.log("✅ isEveryoneKid :", isEveryoneKid);

const isSomeoneKid = persons.some((person) => person.age <= 15);
console.log("✅ isSomeoneKid :", isSomeoneKid);

// Custom Higher-Order Functions
// myFilter
Array.prototype.myFilter = function myFilter(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element)) {
      result.push(element);
    }
  }

  return result;
};

const myKids = persons.myFilter((person) => person.age <= 15);
console.log("✅ myKids :", myKids);

// myMap
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result.push(callback(element));
  }

  return result;
}

const myOlderPersons = myMap(persons, (person) => ({
  ...person,
  age: person.age * 2,
}));
console.log("✅ myOlderPersons :", myOlderPersons);
