// // Generic classes

// class KeyValuePair<k,v> {
//   constructor(key: k, value: v){}
// }
// let pair = new KeyValuePair(1,'savan')
// let pair2 = new KeyValuePair(1,2)





// // Generic function
// class ArrayUtils {
//   static wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let numbers = ArrayUtils.wrapInArray("1");






// // Generic Interface
// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   console.log(url)
//   return {
//     data: null,
//     error: null,
//   };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<Product>("url");
// console.log(result.data?.title);







// Generic constaints
// function echo<T extends number | string> (value: T): T{
//   return value;
// }

// echo(true) //gives error

// function echo2<T extends {name:string}> (value: T): T{
//   return value;
// }

// echo2({name: "savan"})






// // extending generic classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

let store = new Store<Product>();

// // Pass on the generic type parameter
class ComprassibleStore<T> extends Store<T> {
  compress() {}
}

let store1 = new ComprassibleStore<Product>();
store1.add({ name: "apple", price: 100 });
store1.compress();

// // Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }





// // keyof Operator

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   find(property: keyof T, value: unknown): T | undefined{
//     return this._objects.find(obj => obj[property] === value)
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 100 });
// store.find('name','a')
// store.find('price',100)






// // type Mapping
// // create new type based on existing type
interface Product{
  name: string;
  price: number;
}

type ReadOnly<T> = {
  // Index signature
  // keyof
  readonly [k in keyof T] : T[k]
}

let product : ReadOnly<Product> = {
  name: "a",
  price: 1
}