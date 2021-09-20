// type AddFn = (a:number, b:number) => number;
interface AddFn {
  (a:number, b:number): number; // strictly typed anon function inside interface
}

let add:AddFn;

add = (n1:number, n2:number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string; // optional property
}

// Interfaces forces a structure
// extending another interface creates a new interface
// having 2 seperate interfaces gives you flexibility on which structure you'd like to use
interface Greetable extends Named {
  greet(phrase:string): void;
}

// You can inherit multiple interfaces
class Person implements Greetable {
  name?:string; // optional
  age = 32;

  constructor(n?:string) { // optional parameter or can put a default val
    if (n) {
      this.name = n;
    }
  }

  greet(phrase:string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1:Greetable;

user1 = new Person();
// user1.name = 'Another name'; // Can't re-assign to readonly property

user1.greet('Hi there - I am');
console.log(user1);
