
//OOP
//CODING CHALLENGE #1



function Car(make,speed) {
    this.make = make;
    this.speed = speed;
  }
  
 
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`The ${this.make} is now going at ${this.speed} km/h.`);
  };
  
  
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`The ${this.make} is now going at ${this.speed} km/h.`);
  };
  
  
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  
  car1.accelerate(); 
  car1.accelerate();
  car1.brake();
  
  car2.accelerate(); 
  car2.brake(); 








//OOP
//CODING CHALLENGE #2


  class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    
    get speedUS() {
      return this.speed / 1.6;
    }
  
    
    set speedUS(speedUS) {
      this.speed = speedUS * 1.6;
    }
  
    
    accelerate() {
      this.speed += 10;
      console.log(`The ${this.make} is now going at ${this.speed} km/h.`);
    }
  
    
    brake() {
      this.speed -= 5;
      console.log(`The ${this.make} is now going at ${this.speed} km/h.`);
    }
  }
  
  
  const car3 = new CarCl('Ford', 120);
  car3.accelerate(); 
  car3.brake(); 
  
  console.log(car3.speedUS); 
  
  car3.speedUS = 100;
  console.log(car3.speed); 














//CODING CHALLENGE #4

  
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');


button.addEventListener('click', convertToCamelCase);


function convertToCamelCase() {
 
  const inputText = textarea.value.trim();

 
  const variableNames = inputText.split('\n');


  for (let i = 0; i < variableNames.length; i++) {
   
    const words = variableNames[i].split('_');

   
    for (let j = 1; j < words.length; j++) {
      words[j] = words[j][0].toUpperCase() + words[j].slice(1);
    }

   
    const camelCaseVariableName = words.join('');

  
    console.log(camelCaseVariableName);
  }
}













//CODING CHALLENGE #1




const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho', 'Gotze']
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
 
  const [players1, players2] = game.players;
  
  
  const [gk, ...fieldPlayers] = players1;
  
  
  const allPlayers = [...players1, ...players2];
  
 
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  
  
  const { team1, x: draw, team2 } = game.odds;
  

  function printGoals(...players) {
    console.log(`${players.length} goals were scored.`);
    for (const player of players) {
      console.log(player);
    }
  }
  
  
  console.log(team1 < team2 ? game.team1 : game.team2);
  
  
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  printGoals(...game.scored);











//CODING CHALLENGE #2



  const game1= {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      ['Neuer','Pavard','Martinez','Alaba','Davies','Kimmich','Goretzka','Coman','Muller','Gnarby', 'Lewandowski'],
      ['Burki', 'Schulz','Hummels','Akanji','Hakimi','Weigl','Witsel','Hazard','Brandt','Sancho', 'Gotze']
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
 
  for (const [index, player] of game1.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
  
  let averageOdd = 0;
  for (const odd of Object.values(game1.odds)) {
    averageOdd += odd;
  }
  averageOdd /= Object.values(game1.odds).length;
  console.log(`Average odd: ${averageOdd.toFixed(2)}`);
  
  
  for (const [team, odd] of Object.entries(game1.odds)) {
    const teamName = team === 'x' ? 'draw' : game1[team];
    console.log(`Odd of victory ${teamName}: ${odd}`);
  }
  
  
  const scorers = {};
  for (const player of game1.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
  }
  console.log(scorers);
  







  //ASYNCHRONOUS JAVASCRIPT

  function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Unable to fetch location data');
        }
        return response.json();
      })
      .then(data => {
        const city = data.city;
        const country = data.country;
        console.log(`You are in ${city}, ${country}`);
        return country; 
      })
      .catch(error => {
        if (error.message === 'Unable to fetch location data') {
          console.error('Error: Unable to fetch location data. Please try again later.');
        } else {
          console.error('Error:', error);
        }
      });
  }
  
 
  whereAmI(52.508, 13.381);






  //


let myArr=[]

let myObj={name:"john",age:"30"}

myArr.push(myObj)
console.log(myArr)
console.log(myObj)

  
  

  
  