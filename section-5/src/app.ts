class Department {
  // private readonly id:number;
  // private name:string;
  // can preface with 'public' but not needed because it is public by default
  private employees:string[] = []; // private vars can only be accessed within class

  constructor(private readonly id:string, public name:string) { // initialized in parameter list
    // this.id = id;
    // this.name = name;
  }

  describe(this:Department) { // describe can only be called by a Department obj
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee:string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log('Number of employees:', this.employees.length);
    console.log('List of employees:', this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Daniel');
accounting.addEmployee('Bambi');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
// accountingCopy.describe();
