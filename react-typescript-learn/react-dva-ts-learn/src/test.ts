// interface Test {
//   say(): string;
// }

// class Demo implements Test {
//   say(): string {
//     return "";
//   }
// }

export {};

// interface Counter {
//   (num: number): string;
// }

// let counter: Counter;

// counter = function(num: number) {
//   return "";
// };

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

// const temp: Counter = {
//   interval: 121,
//   reset: () => {},
// };

class Test {
  getCounter = (): Counter => {
    // const counter: Counter = { interval: 1, reset: () => {} };
    // const temp = counter(12121);
    const counter = (start: number) => {
      return `${start}`;
    };
    counter.interval = 123;
    counter.reset = () => {};
    return counter;
  };
}

// const test = new Test();
// test.getCounter();

// function getCounter(): Counter {
//   let counter = <Counter>function(start: number) {};
//   counter.interval = 123;
//   counter.reset = function() {};
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
