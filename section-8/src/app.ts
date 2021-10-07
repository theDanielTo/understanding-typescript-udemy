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