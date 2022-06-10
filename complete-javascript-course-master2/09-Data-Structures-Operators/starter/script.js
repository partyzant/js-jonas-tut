'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = text => text.slice(0, 3).toUpperCase();

flights.split('+').forEach(item => {
  const [msg, from, to, time] = item.split(';');

  const sign = msg.toLocaleLowerCase().startsWith('_delayed') ? '🔴' : '';

  console.log(
    `${sign}${msg
      // .replaceAll('_', ' ')
      .replace(/_/g, ' ')
      .trim()
      .padStart(sign ? 18 : 20, '-')} from ${getCode(from)} to ${getCode(
      to
    )} (${time.replace(':', 'h')})`
  );
});
/* 
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
}; */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Sancho',
    'Lewandowski',
    'Sancho',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scoredGoals = game.scored;
const team1Name = game.team1,
  team2Name = game.team2;

//challenge #1
//ex. 1
const players1 = game.players[0];
const players2 = game.players[1];
//ex. 2
const [gk, ...fieldPlayers] = players1;

//ex. 3
const allPlayers = [...players1, ...players2];

//ex. 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//ex. 5
const {
  score,
  odds: { team1, x: draw, team2 },
} = game;
// console.log(score, team1, draw, team2);

//ex. 6
const getGoalsNum = playerName => {
  return scoredGoals.reduce((total, item) => {
    return item === playerName ? total + 1 : total;
  }, 0);
};
const printGoals = numOfPlayers => {
  allPlayers.forEach((item, idx) => {
    if (!numOfPlayers || idx >= numOfPlayers) return;

    console.log(item, getGoalsNum(item));
  });
};
// printGoals(50);

//ex. 7
// team1 < team2 && console.log(`${team1Name} 1 wygra!!`);
// team1 > team2 && console.log(`${team2Name} 2 wygra!!`);

//for of loop
/* const arr = [2, 7, 6, 3, 1, 8, 4, 6, 7, 2, 5, 3, 4];

for (const [id, el] of arr.entries()) {
  el > 5 || console.log(id, el);
} */

/* const dupa = 'ddddd';

const obj = {
  name: 'coś',
  dupa,
};
console.log(obj); */

/* const auto = {
  name: 'kiambordźini',
};

console.log(auto.silnik?.paliwo.cipa); */

/* const props = Object.entries(game);
console.log(props); */

//challenge #2
//ex. 1
/* for (const [id, el] of game.scored.entries()) {
  console.log(`${id + 1}`, el);
} */

//ex. 2
const oddsArr = Object.values(game.odds);
const oddSum = oddsArr.reduce((total, item) => {
  return total + item;
}, 0);
// console.log(oddSum / oddsArr.length);

//ex. 3
// console.log(Object.entries(game.odds));
for (const [team, odd] of Object.entries(game.odds)) {
  const event = game[team] ? `victory ${game[team]}` : 'draw';

  // console.log(`Odd of ${event}: ${odd}`);
}

//bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
// console.log(scorers);

const arr = ['dupa', 'cipa', 'dupa', 'cycki'];

// const set = new Set(arr);

// console.log([...new Set(arr)]);
// console.log(new Set(arr).size);

// challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//ex. 1
const events = [...new Set(gameEvents.values())];

//ex. 2
gameEvents.delete(64);

//ex. 3
/* console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); */

//ex. 4
/* for (const [time, ev] of gameEvents) {
  console.log(`[${time <= 45 ? 'FIRST' : 'SECONT'} HALF] ${time}: ${ev}`);
} */

const airline = 'TAP Air Portugal';

// console.log(`-${airline.slice(0, airline.indexOf(' '))}-`);
// console.log(`-${airline.slice(airline.lastIndexOf(' ') + 1)}-`);

const capitaliseString = str => {
  if (typeof str !== 'string') return 'Error: to nie string!';

  const lname = str.toLowerCase();

  const aname = lname.split(' ');

  return aname.reduce((prev, curr) => {
    // return (prev ? `${prev} ` : '') + curr[0].toUpperCase() + curr.slice(1);
    // return `${prev ? `${prev} ` : ``}${curr[0].toUpperCase() + curr.slice(1)}`;
    return `${prev ? `${prev} ` : ``}${curr.replace(
      curr[0],
      curr[0].toUpperCase()
    )}`;
  }, '');
};

const name = 'jan paweł sławomir maMA AGA';

// console.log(`-${capitaliseString(name)}-`);
// console.log('sdfsf'[1]);

const xkfjr = ' lsdjfTTT \n';
// console.log(xkfjr.trim().toLocaleLowerCase());
// console.log(Number('288,97Ł'.slice(0, -1).replace(',', '.')));

const txt = 'zzz ass zzz zzz';
// console.log(txt.replace('zzz', 'x'));
// console.log(txt.replaceAll('zzz', 'x'));

// console.log(airline.includes('x'));
// console.log('cipkaanddupaandcycki'.split('and'));

const nr = '2355 2466 8986 0624'.slice(-4).padStart(19, '**** ');

// console.log(`-${nr}-${'🍕'.repeat(5)}`);

// challenge #4

//ex. 1
const varsTextarea = document.createElement('textarea');
const varsButton = document.createElement('button');
varsButton.innerText = 'Convert Variables';

document.body.append(varsTextarea);
document.body.append(varsButton);

const xxx = function () {
  varsButton.removeEventListener('click', xxx);
  const varsArr = varsTextarea.value.split('\n');

  varsArr.forEach((value, idx) => {
    let item = underscoredToCamel(value.trim());

    console.log(`${item.padEnd(20, ' ')}${'✅'.repeat(idx + 1)}`);
  });
};

const underscoredToCamel = vars => {
  const varArr = vars.toLowerCase().split('_');

  return varArr.reduce((prev, current) => {
    return prev
      ? `${prev}${current.replace(current[0], current[0].toUpperCase())}`
      : current;
  }, '');
};

varsButton.addEventListener('click', xxx);
// console.log(underscoredToCamel('jakas_zmianna_dupa'));
