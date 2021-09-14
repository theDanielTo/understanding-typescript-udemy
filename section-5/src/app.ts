class Department {
  static fiscalYear = 2020;
  // private readonly id:number;
  // private name:string;
  // can preface with 'public' but not needed because it is public by default
  protected employees:string[] = [];
  // protected props can be accessed only within class and other classes that extends this class
  // private props can only be accessed within class

  constructor(private readonly id:string, public name:string) { // properties initialized in parameter list
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name:string) {
    return { name:name };
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

class ITDepartment extends Department {
  // admins:string[];
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    // this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport:string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(text:string) {
    if (!text) throw new Error('Please pass in a valid value.');
    this.addReport(text);
  }

  constructor(id:string, public reports:string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(name:string) {
    if(name === 'Daniel') {
      return;
    }
    this.employees.push(name)
  }

  addReport(text:string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('Reports:', this.reports);
  }
}

const employee1 = Department.createEmployee('Daniel');
console.log('employee1:', employee1);
console.log("Department.fiscalYear:", Department.fiscalYear);

const it = new ITDepartment('d2', ['Bob', 'Buddy']);

it.addEmployee('Daniel');
it.addEmployee('Bambi');

// it.employees[2] = 'Anna';

it.describe();
it.printEmployeeInformation();

// const itDepartmentCopy = { name: 'DUMMY', describe: it.describe };
// itDepartmentCopy.describe();

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Daniel');
accounting.addEmployee('Joe');

accounting.printReports();
accounting.printEmployeeInformation();
