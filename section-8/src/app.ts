function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('LOGGING - PERSON') // Person class using Logger decorator
class Person {
  name = 'Daniel';

  constructor() {
    console.log('Creating person object...');
  }
}

const person1 = new Person();

console.log(person1);
