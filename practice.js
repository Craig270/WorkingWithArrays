/*
Practice problem I worked on tonight for forEach exposure. 

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

const jDataOne = [3, 5, 2, 12, 7];
const kDataOne = [4, 1, 15, 8, 3];
const jDataTwo = [9, 16, 6, 8, 3];
const kDataTwo = [10, 5, 6, 1, 4];
/* 
let jDataNewOne = jDataOne.slice(1, -1);

console.log(jDataNewOne);

console.log(jDataOne.slice(1, -1)) 
*/

function checkDogs(dogsJulia, dogsKate) {
  let noCats = dogsJulia.slice(1, -2);
  let allData = noCats.concat(dogsKate);
  allData.forEach(function (age, i) {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

checkDogs(jDataOne, kDataOne);
checkDogs(jDataTwo, kDataTwo);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs.
4. Run the function for both test datasets.

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/
console.log(`Code Challenge #2 below:`);

dog1 = [5, 2, 4, 1, 15, 8, 3];
dog2 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(arr) {
  console.log(`Start of function`);
  let humanDogAge = arr.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  let filterDogs = humanDogAge.filter(age => (age >= 18 ? age : null));
  let avgAge =
    filterDogs.reduce((snowball, age) => snowball + age, 0) / filterDogs.length;
  console.log(humanDogAge);
  console.log(filterDogs);
  console.log(avgAge);
  console.log(`End of function`);
}
calcAverageHumanAge(dog1);
calcAverageHumanAge(dog2);
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/
console.log(3);
function ArrowsDogAge(arr) {
  let dogAge = arr
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => (age >= 18 ? age : null))
    .reduce((snowball, age, i, l) => snowball + age / l.length, 0);
  console.log(dogAge);
  return dogAge;
}

ArrowsDogAge(dog1);
ArrowsDogAge(dog2);
