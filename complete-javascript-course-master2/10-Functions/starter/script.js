'use strict';

/* let x = 'aaaaa';
let b = x;
b = 'dddddd';
console.log(x, b); */

// for (let i = 0; i < 100; i++) console.log(Math.trunc(Math.random() * 1000));

/* const person = {
  name: 'Osoba',
  greet(msg, ...rest) {
    console.log(this);
    console.log(`${msg} to ${this.name} ${rest.join(', ')}`);
  },
};
console.log(person.greet('helllloł'));

const ja = {
  name: 'Paweł',
};

const greetJa = person.greet.bind(ja, 'joł joł madafaka');

greetJa('siemandero', 'dupa');
greetJa('jaksdkjf'); */

// const addTax = (rate, value) => value + value * rate;
// const gros8 = value => addTax(0.08, value);

/* const gros8 = value => {
  return (rate = 0.4) => {
    return value + value * rate;
  };
};
const val100 = gros8(100);

console.log(val100(0.2)); */

/* const greetArr = greeting => name => console.log(`${greeting} ${name}`);
const g1 = greetArr('Hi');
console.log(g1);
g1('Jonas');
g1('Pablo'); */

// const addTax = (rate, value) => value + value * rate;
// const addVat = value => addTax(0.23, value);

/* const addTax = rate => value => value + value * rate;
const addVat = addTax(0.24);
console.log(addVat);
console.log(addVat(1000)); */

//challenge #1
/*
//ex. 1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function (param1) {
    // const optionsStr = poll.options.reduce((prev, curr) => {
    //   return `${prev && `${prev}\n`}${curr}`;
    // }, '');

    const answer = Math.trunc(
      Number(
        prompt(
          `${this.question}\n${this.options.join('\n')}\n(Write option number)`
        )
      )
    );

    if (Number.isNaN(answer) || answer < 0 || answer > 3) {
      alert('Wrong answer!!!');
      return;
    }

    this.answers[answer]++;

    this.displayResults();
    this.displayResults('dupa');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
      return;
    }

    console.log(`Poll results som: ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener(
    'click',
    poll.registerNewAnswer.bind(poll, 'binded param test')
  );
*/
/* poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); */

/* const name = 'Paweł';
debugger;
const first = () => {
  let a = 1;
  const b = second();
  a = a + b;
  return a;
};

function second() {
  var c = 2;
  return c;
}

const x = first(); */

(function () {
  const head = document.querySelector('h1');
  head.style.color = 'red';

  console.log(
    document.body.addEventListener('click', () => {
      head.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    })
  );
})();
