function indentity<T>(args: T): T {
  // console.log(args.length)
  return args;
}

let message = indentity<string>("this is message");
console.log("message :: >> ", message);

let myIndentity: <T>(args: T) => T = indentity;
let myIndentity2: { <T>(args: T): T } = indentity;
let message2 = myIndentity2<string>("this is message2");
console.log("message2 :: >> ", message2);

let message3 = myIndentity2("this is message3");
console.log("message3 :: >> ", message3);

function loggingIdentity<T>(arg: T[]): T[] {
  console.log("arg.length", arg.length);
  return arg;
}

let things: Array<string> = [];
things.push("hello");
things.push("world");
loggingIdentity(things);

function indentity2<T>(args: T[]) {
  console.log(args.length);
  args.forEach(item => {
    console.log("say the thing is :: ", item);
  });
}
indentity2(things);

interface Level {
  length: number;
}

function indentity3<T extends Level>(arg: T): T {
  console.log(arg.length);
  return arg;
}
indentity3({ length: 10 });

function getProperty<T, K>(obj: T, key: K) {
  console.log(obj, key);
}
getProperty({ name: "shizi", age: 18 }, {});

function getProperty2<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let obj = { x: 1, y: 2, z: 3 };
let value = getProperty2(obj, "x");
console.log("value :: ", value);

class BeeKeeper {
  hasMask: boolean = false;
}

class ZooKeeper {
  nametag: string = "zoom";
}
class Animal {
  numLegs: number = 4;
}
class Bee extends Animal {
  keeper: BeeKeeper;
}
class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
console.log("createInstance :: ", createInstance(Lion).keeper.nametag)