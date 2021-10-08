function Logger(logString: string) {
  console.log('LOGGER FACTORY');

  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

// Class Decorator
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  // if not interested in using the argument (constructor). specify with under_score to tell TS that you are aware
  return function<T extends { new(...args: any[]): {name: string} }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template.");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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
function Log2(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  console.log('2: Accessor decorator!');
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
  return {}; // can return set, get, enumerable, configurable
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

  @Log2 // accessor decorator
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

  @Log3 // method decorator & parameter decorator
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book', 19);
const p2 = new Product('Book 2', 21);
// note: decorators execute at time of definition, not when creating an instance

// auto-bind this
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this); // 'this' will always refer to the obj that calls get()
      return boundFn;
    }
  };
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector('button')!; // exclamation mark => this won't be null
btn.addEventListener('click', p.showMessage);

// Validators with Decorators
interface ValidatorConfig {
  [property: string]: { // property accessor - bracket notation
    [validatableProp: string]: string[]
  }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ['required']
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ]
    // At the moment, only one validator value is stored in the array (e.g. 'required')
    //Multiple values should be stored instead - at least potentially.
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    // [propName]: ["positive"]
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ]
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]; // double bang => convert Object to boolean
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
  event.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});
