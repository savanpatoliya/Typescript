// // Decorator
// // it is function thats called by javascript run time

// function Compontent(constructor: Function){
//   console.log("component decorated");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertDOM = () => {
//     console.log("inseting in the DOM")
//   }
// }

// @Compontent
// class ProfileCompnenet {

// }






// // parameterize decorators
// // Decorator factory
// function Compontent(value:number){
//   return (constructor: Function) => {
//     console.log("component decorated");
//     constructor.prototype.value = value
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertDOM = () => {
//       console.log("inseting in the DOM")
//     }
//   }
// }

// @Compontent(1)
// class ProfileCompnenet {

// }






// Decorator composition
function Compontent(value: number) {
  return (constructor: Function) => {
    console.log("component decorated");
    constructor.prototype.value = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDOM = () => {
      console.log("inseting in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("pipe decorated");
  constructor.prototype.pipe = true;
}

@Compontent(1)
@Pipe
class ProfileCompnenet {}







// // Method decorator
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   let original = descriptor.value as Function;
//   descriptor.value = function (message: string) {
//     console.log("before");
//     original.call(this, message);
//     console.log("after");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("person say" + message);
//   }
// }

// let person = new Person();
// person.say("hieee");






// Accessor Decorators
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  let original = descriptor.get;
  descriptor.value = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(public fname: string, public lname: string) {}
  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
}

let person = new Person("Savan", "Kumar");
console.log(person.fullName);
