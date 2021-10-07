function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger // Person class using Logger decorator
class Person {
  name = 'Daniel';

  constructor() {
    console.log('Creating person object...');
  }
}

const person1 = new Person();

console.log(person1);
