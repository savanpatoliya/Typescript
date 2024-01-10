// // classes
class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(
    name: string,
    type: string,
    age: number,
public userName?: string
  ) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  printAge() {
    console.log(this.age);
  }
  setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("savan", "student", 12, "savan");
console.log(person);
person.printAge();
person.setType("cool");

class Savan extends Person {
  constructor(userName: string) {
    super("savan", "student", 12, userName);
    this.age = 31;
  }
}

const savan = new Savan("savan");

// // getters setters
// class Plant {
//   private _species: string = "Default";

//   get species(): string {
//     return this._species;
//   }
//   set species(value: string) {
//     if (value.length > 3) {
//       this._species = value;
//     } else {
//       this._species = "Default";
//     }
//   }
// }

// let plant = new Plant();
// console.log(plant.species);
// plant.species = "Apple";
// console.log(plant.species);

// // static properties & method

// class Helpers {
//   static PI: number = 3.14;
//   static calcCircumference(diameter: number): number {
//     return this.PI * diameter;
//   }
// }
// console.log(Helpers.PI);
// console.log(Helpers.calcCircumference(2));

// // Abstract classess
// abstract class Project {
//   projectName: string = "Default";
//   budget!: number;

//   abstract changeName(name: string): void;
//   abstract changeBudget(budget: number): void;
//   calcBudget() {
//     return this.budget * 2;
//   }
// }

// class ITProject {
//  budget: number ;
// ITProject()
// changeBudget(budget: number): void {
//   this.budget = budget;
// }

// changeName(name: string): void {

//   this.projectName = name;
// }
// }

// let newProject = new ITProject();
// console.log(newProject);
// newProject.changeName("super it project")
// console.log(newProject)
