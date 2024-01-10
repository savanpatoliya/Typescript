// functions
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10000);






// objects
// let employee: {
//     id: number,
//     name: string,
// } = {id: 1, name: 'savan'}
// employee.name = 'sahil'

// let employee: {
//     id: number,
//     name?: string,  // this is not good practice
// } = {id: 1}
// employee.name = 'sahil'
// console.log(employee.name)

// let employee: {
//    readonly id: number,
//     name: string,
// } = {id: 1, name: 'savan'}
// employee.id = 2
// employee.name = 'sahil'

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "savan",
  retire: (date: Date) => {
    console.log(date);
  },
};







// // optional chainning

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());






// // arrow function
const addNumbers = function (number1: number, number2: number): number {
  return number1 + number2;
};

console.log(addNumbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => {
  return number1 * number2;
};







// // rest & spread operator

const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers));

function makeArray(...args: number[]) {
  return args;
}

console.log(makeArray(1, 2, 3, 4));






// // destructuring
const myHobbies = ["food", "sports"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData = { userName: "savan", age: 20 };
const { userName, age } = userData;
console.log(userName, age);

// let numbers = [1, 2, 4];
// let newArray = [3, 5];
// let newArray2 = [6, 7, ...numbers, ...newArray];
// console.log(newArray2);
