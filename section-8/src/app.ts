function Logger(logString: string) {
  console.log('LOGGER FACTORY');

  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  // if not interested in using the argument (constructor). specify with under_score to tell TS that you are aware
  return function (constructor: any) {
    console.log('Rendering template.');

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

// @Logger('LOGGING - PERSON') // Person class using Logger decorator
@Logger('Logging') // code outside of return function runs top to bottom
@WithTemplate('<h1>My Person Object</h1>', 'app') // with multiple decorators, decorator (return) function run bottom up
class Person {
  name = 'Daniel';

  constructor() {
    console.log('Creating person object...');
  }
}

const person1 = new Person();

console.log(person1);

// Property Decorator
function Log(target: any, propName: string | Symbol) {
  console.log('1: Property decorator!');
  console.log('target:', target); // target => class prototype
  console.log('propName', propName); // propName => name of property
}

// Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('2: Accessor decorator!');
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}

// Method Decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("3: Method decorator!");
  console.log("target:", target);
  console.log("name:", name);
  console.log("descriptor:", descriptor);
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("4: Parameter decorator!");
  console.log("target:", target);
  console.log("name:", name); // name of method
  console.log("position:", position); // position in parameter list
}

class Product {
  @Log // property decorator
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive.");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
