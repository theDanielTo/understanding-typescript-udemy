// const person: {
//   name: string;
//   age: number;
// } = {

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple. first element must be number, second... string
// } = { // better to have ts infer the types
//   name: 'Daniel',
//   age: 31,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

enum Role { ADMIN = 5, READ_ONLY = 'ok', AUTHOR = 100 };
// if enum starts with 5... 6, 7 () unless explictly assigned

const person = {
  name: "Daniel",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0 , 'admin', 'user'];

// let favoriteActivities: any[]; // string of any type.. try to avoid tho
let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Cooking'];

console.log('person.name:', person.name);
console.log('person.age:', person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!! map is array method
}

if (person.role === Role.AUTHOR) {
  console.log('is author.');
} else if (person.role === Role.ADMIN) {
  console.log('is admin.');

}
