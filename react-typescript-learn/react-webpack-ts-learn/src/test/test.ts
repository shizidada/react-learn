class Person {
  private name: string;
  private age: number;

  setInfo(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log("my name is", this.name, this.age);
  }
}

const person1 = new Person();
person1.setInfo("tom", 11);
person1.say();
console.log("this message from test.ts");
