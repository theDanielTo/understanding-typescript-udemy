type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection type

const e1: ElevatedEmployee = {
  name: 'Daniel',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic; // intersection ==> number

function add(a: Combinable, b: Combinable) {
  // type guard. if string, then concatenate. if number, arithmetic
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) { // checking if a prop is in an obj
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'employee3', privileges: ['bathroom'] });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) { // another way to check for prop (type guard)
    vehicle.loadCargo(500);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: 'bird'; // literal type assignment
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

// discriminated union
type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 5 });

// type casted HTMLInputElement (the exclamation mark means it will never be null)
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi There!';

// { email: 'Not a valid email;, username: 'Must start with a character!' }
interface ErrorContainer {
  [prop: string]: string; // arbitrary prop & value (index property)
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!'
};
