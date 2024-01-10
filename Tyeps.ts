let num: number = 10

if (num < 50)
  num+=10

let sales = 123_456_789
let course: string = 'typescript'
let is_published: boolean = true
let level // this is any type

level = 1
level = 'a'




// function newfun(document){
//     console.log(document)
// }

// let numbers: number[] = [1,2,3]
// let number = [1,2,3] // implicitly detect as number[]
// let number: number[] = [] //implicitly consider as any[] type
// number.forEach(n => n.)





// tuples
// it is fixed lenght key velue pair type array
let user: [number, string] = [1, 'savan']
let address: [string, number][] = [
    ["cooking", 10],
    ["surat", 20],
  ]; // array of tuples




// enums
// it is list of related constants
const enum Size {small = 1, medium, large}

let mySize = Size.small
console.log(mySize)



// // type aliases

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employees: Employee = {
  id: 1,
  name: "savan",
  retire: (date: Date) => {
    console.log(date);
  },
};






// // unions

function kgToLbs(weight: number | string) {
  // narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

console.log(kgToLbs(100));
console.log(kgToLbs("100kg"));






// // intersaction type

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};






// literal type
// used to limit the values we can assign to variables

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Matric = "cm" | "inch";
let matric: Matric = "cm";





// // nullable type

function greet(name: string | null | undefined) {
  if (name) {
    console.log(`Hello ${name.toUpperCase}`);
  } else {
    console.log("Hello");
  }
}

greet(null);
greet(undefined);
greet("savan");






// // never type
function neverReturns(): never {
  throw new Error("an error");
}

function processEvents(): never{
  while (true) {

  }
}
// processEvents();
// console.log("hello world")







// // index signatures
// class SeatAssignment {
// A1,A2, ...
// Mosh, John, ...
// Index signature Property
//   [seatNumber: number]: string;
// }

// let seats = new SeatAssignment()
// seats.A1 = 'Mosh'
// seats.A2 = 'John'
// seats[0] = 'Mosh'

// let speed: number | null = null
// let ride = {
//   // Nullish coalescing operator
//   speed: speed ?? 30
// }





// // Type assertion
// let phone = document.getElementById('phone') as HTMLInputElement
let phone = <HTMLInputElement> document.getElementById('phone')






// unknown Type
function render(document: unknown){
//   document.move()

}

render(1)