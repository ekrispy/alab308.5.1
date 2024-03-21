// const arr = [23, 34, 77, 99, 324];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

let array = [31, 42, 50, 22, 96, 54, 5, 2, 10];
let returnTheSum = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // console.log(sum)
  return sum;
};
returnTheSum(array);

//return average
let returnTheAverage = function (array) {
  let average = returnTheSum(array) / array.length;
  return average;
};
console.log(returnTheAverage(array));

let phrasesArray = [
  "Eat an apple a day",
  "Bananas are great for energy",
  "Oranges are juicy and refreshing",
  "Grapes make a tasty snack",
  "Kiwi fruit is rich in vitamin C",
  "Strawberries are perfect for dessert",
  "Pineapple adds a tropical twist",
  "Blueberries are packed with antioxidants",
  "Watermelon is deliciously hydrating",
];
//return longest string
//   let returnTheLongestString = function () {
//     const lgth = 0
//     let longest;
//     for (let i = 0; i < phrasesArray.length; i++) {
//         if (arr[i].length > length) {
//             let lgth = phrasesArray[i].length
//             longest = phrasesArray[i];
//         }
//     }
//   }
//   console.log(returnTheLongestString)

let returnTheLongestString = function (array) {
  let longestString = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i]?.length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
};
console.log(returnTheLongestString(phrasesArray));

// compare strings to numbers

let compareStringsToNumbers = function (array, number) {
  let lonString = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]?.length > number) {
      lonString.push(array[i]);
    }
  }
  return lonString;
};
console.log(compareStringsToNumbers(phrasesArray, 35));

// recursion
function printNos(n) {
  if (n >= 0) {
    printNos(n - 1);
    console.log(n + " ");
  }
  return;
}
let n = 10;
printNos(n);

//part 2
let people = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//sort by age

people.sort((a,b) => {
    return a.age - b.age;

});
console.log(people)
//Filter the array to remove entries with an age greater than 50.
let lessThan50 = people.filter(person => {
   return person.age < 50
})
console.log("less than 50", lessThan50)

//Map the array to change the “occupation” key to “job” and increment every age by 1.
let mapJobs = people.map( person => (
   {
     id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1

}
));
console.log("map jobs", mapJobs)

// Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.

let reducedPeople = mapJobs.reduce((acc, person)=> acc += person.age, 0) 
 
console.log("reduced", reducedPeople)

let averageAge = reducedPeople / mapJobs.length
console.log('average age', averageAge)

//part 3
let oneObject = mapJobs[0]
function incrementAge (oneObject) {
    return oneObject.age + 1

}
console.log("increment age", incrementAge(oneObject))