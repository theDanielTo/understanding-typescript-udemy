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
