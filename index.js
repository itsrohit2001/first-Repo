//Coding Challenge #1
//-------------------

let jack_weight = 78;
let jack_height = 1.69;

let jill_weight = 92;
let jill_height = 1.95;

let jack_bmi = jack_weight / jack_height ** 2;
let jill_bmi = jill_weight / jill_height ** 2;

let jackHigherBMI = jack_bmi > jill_bmi;

console.log("Data 1--");
console.log("Jack's BMI: " + jack_bmi);
console.log("Jill's BMI: " + jill_bmi);
console.log("Jack has a higher BMI than Jill: " + jackHigherBMI);

let jack_weight2 = 95;
let jack_height2 = 1.88;

let jill_weight2 = 85;
let jill_height2 = 1.76;

let jack_bmi2 = jack_weight2 / jack_height2 ** 2;
let jill_bmi2 = jill_weight2 / jill_height2 ** 2;

let jackHigherBMI2 = jack_bmi2 > jill_bmi2;

console.log("Data 2--");
console.log("Jack's BMI: " + jack_bmi2);
console.log("Jill's BMI: " + jill_bmi2);
console.log("Jill has a higher BMI than Jack: " + jackHigherBMI2);











//Coding Challenge  #2
//------------------------

if (jack_bmi > jill_bmi) {
  console.log(`Jack's BMI (${27.3}) is higher than Jill's BMI (${24.2})`);
} else {
  console.log(`Jill's BMI (${27.3}) is higher than Jack's BMI (${24.2})`);
}


if (jack_bmi2 > jill_bmi2) {
  console.log(`Jack's BMI2 (${26.8}) is higher than Jill's BMI2 (${27.4})`);
} else {
  console.log(`Jill's BMI2 (${26.8}) is higher than Jack's BMI2 (${27.4})`);
}




//coding challenge
//-------------------


// Object for Jack
let jack = {
  fullName: "Jack Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

// Object for Jill
let jill = {
  fullName: "Jill Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

// Calculate BMIs
jack.calcBMI();
jill.calcBMI();

// Compare BMIs
if (jill.bmi > jack.bmi) {
  console.log(`${jill.fullName}'s BMI (${jill.bmi.toFixed(1)}) is higher than ${jack.fullName}'s (${jack.bmi.toFixed(1)})!`);
} else if (jack.bmi > jill.bmi) {
  console.log(`${jack.fullName}'s BMI (${jack.bmi.toFixed(1)}) is higher than ${jill.fullName}'s (${jill.bmi.toFixed(1)})!`);
} else {
  console.log(`${jack.fullName} and ${jill.fullName} have the same BMI (${jack.bmi.toFixed(1)})!`);
}








//Coding Challenge #3
//-----------------------

let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];

let dolphinsAverage =
  dolphinsScores.reduce((sum, score) => sum + score, 0) / dolphinsScores.length;
let koalasAverage =
  koalasScores.reduce((sum, score) => sum + score, 0) / koalasScores.length;

console.log(dolphinsAverage);
console.log(koalasAverage);


if(dolphinsAverage>koalasAverage){
  console.log(`dolphins are the winners`)
}else{
  console.log(`koalas are the winners`)
}

let dolphinsScores1 = [97, 112, 101];
let koalasScores1 = [109, 95, 123];

let dolphinsAverage1 =
  dolphinsScores1.reduce((sum, score) => sum + score, 0) /
  dolphinsScores1.length;
let koalasAverage1 =
  koalasScores1.reduce((sum, score) => sum + score, 0) / koalasScores1.length;
console.log(dolphinsAverage1);
console.log(koalasAverage1);


if(dolphinsAverage1>koalasAverage1){
  console.log(`dolphins are the winner`)
}else{
  console.log(`koalas are the winners`)
}

let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 106];

let dolphinsAverage2 =
  dolphinsScores2.reduce((sum, score) => sum + score, 0) /
  dolphinsScores2.length;
let koalasAverage2 =
  koalasScores2.reduce((sum, score) => sum + score, 0) / koalasScores2.length;
console.log(dolphinsAverage2);
console.log(koalasAverage2);


if(dolphinsAverage2==koalasAverage2){
  console.log(`No one's the winner`)
}else{
  console.log(``)
}











//Coding Challenge #4
//--------------------

let billValues = [275, 40, 430];

if (billValues > 50 && billValues < 300) {
  let tipValue = 0.15 * billValues[0];
  let bill = billValues[0];
  let totalValue = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
  );
} else {
  let tipValue = 0.2 * billValues[0];
  let bill = billValues[0];
  let totalValue = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
  );
}

if (billValues > 50 < 300) {
  let tipValue = 0.15 * billValues[1];
  let bill = billValues[1];
  let totalValue = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
  );
} else {
  let tipValue = 0.2 * billValues[1];
  let bill = billValues[1];
  let totalValue = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
  );
}

if (billValues > 50 < 300) {
  let tipValue = 0.15 * billValues[2];
  let bill = billValues[2];
  let totalValue = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
  );
} else {
  let tipValue = 0.2 * billValues[2];
  let bill = billValues[2];
  let totalValue = bill + tipValue;
  console.log(
    `The bill was ${bill}, the tip was ${tipValue}, and the total value ${totalValue}`
  );
  }


  function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const totalValue = bill + tip;
    
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}`);
  }
  
  // Test data
  calculateTip(275);
  calculateTip(40);
  calculateTip(430);




  // Function to calculate tip based on bill value
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test the calcTip function with a bill value of 100
const testBill = 100;
const testTip = calcTip(testBill);
console.log(`The bill was ${testBill}, the tip was ${testTip}, and the total value is ${testBill + testTip}`);

// Array of bill values
const bills = [125, 555, 44];

// Array of tip values calculated using the calcTip function
const tips = bills.map(bill => calcTip(bill));

// Array of total values (bill + tip)
const total = bills.map((bill, index) => bill + tips[index]);

console.log(bills); // [125, 555, 44]
console.log(tips); // [18.75, 111, 8.8]
console.log(total); // [143.75, 666, 52.8]






  //  // // // // // // // //


  // Function to calculate tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test data
const bills1 = [125, 555, 44];

// Calculate tips using the calcTip function
const tips1 = bills.map(bill => calcTip(bill));

// Calculate total values
const totals1 = bills.map((bill, index) => bill + tips[index]);

// Print the results
console.log('Tips:', tips);
console.log('Totals:', totals1);





// /// /// /// // // 

// Function to calculate tip
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Test data
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Empty arrays for tips and totals
const tips2 = [];
const totals = [];

// Calculate tips and totals using a for loop
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

// Print the results
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Totals:', totals);

// Function to calculate average
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// Calculate and print the average of the totals
const averageTotal = calcAverage(totals);
console.log('Average Total:', averageTotal);







//CODING CHALLENGE PART-3
//Coding #1


function printForecast(arr) {
  let forecast = "";
  
  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}°C in ${i + 1} days `;
  }
  
  console.log(forecast);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);










//WORKING WITH ARRAYS
//Coding Challenge #1


function checkDogs(dogsJulia, dogsKate) {
  // Create a shallow copy of Julia's array
  const correctedJulia = dogsJulia.slice();

  // Remove the cat ages from the copied array
  correctedJulia.splice(0, 1);
  correctedJulia.splice(-2);

  // Create an array with both Julia's corrected data and Kate's data
  const allDogs = correctedJulia.concat(dogsKate);

  // Iterate over each dog and log whether it's an adult or a puppy
  allDogs.forEach((age, index) => {
    const dogType = age >= 3 ? 'adult' : 'puppy';
    console.log(`Dog number ${index + 1} is a ${dogType}, and is ${age} years old`);
  });
}

// Test data 1
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
checkDogs(juliaData1, kateData1);

// Test data 2
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];
checkDogs(juliaData2, kateData2);








//Coding Challenge #2

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((sum, age, index, arr) => sum + age / arr.length, 0);

// Test data 1
const data1x = [5, 2, 4, 1, 15, 8, 3];
const averageHumanAge1 = calcAverageHumanAge(data1);
console.log(`The average human age of the dogs in dataset 1 is ${averageHumanAge1}`);

// Test data 2
const data2x = [16, 6, 10, 5, 6, 1, 4];
const averageHumanAge2 = calcAverageHumanAge(data2);
console.log(`The average human age of the dogs in dataset 2 is ${averageHumanAge2}`);






//Coding Challenge #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'Jill'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Step 1
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// Step 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'too much' : 'too little'
  }`
);

// Step 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

// Step 4
console.log(
  `${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`
);
console.log(
  `${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`
);

// Step 5
const anyDogEatingRecommended = dogs.some(
  dog => dog.curFood === dog.recommendedFood
);
console.log(`Any dog eating recommended amount: ${anyDogEatingRecommended}`);

// Step 6
const anyDogEatingOkay = dogs.some(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(`Any dog eating an okay amount: ${anyDogEatingOkay}`);

// Step 7
const dogsEatOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

// Step 8
const dogsSortedByRecommendedFood = dogs.slice().sort(
  (a, b) => a.recommendedFood - b.recommendedFood
);








//FUNCTIONS CODING CHALLENGE
//Coding Challenge #1


var poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer: function() {
    var input = prompt(this.question + "\n" + this.options.join("\n") + "\n(Write option number)");

    // Check if input is a number and within the range of options
    if (!isNaN(input) && input >= 0 && input < this.options.length) {
      this.answers[input]++;
    }

    this.displayResults();
  },

  displayResults: function(type = "array") {
    if (type === "string") {
      console.log("Poll results are " + this.answers.join(", "));
    } else {
      console.log(this.answers);
    }
  }
};

// Test the poll object
poll.registerNewAnswer();
poll.registerNewAnswer();
poll.registerNewAnswer();
poll.displayResults("string");
poll.displayResults();





//Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function() {
    header.style.color = 'blue';
  });
})();






