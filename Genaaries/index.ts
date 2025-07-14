// genaries : are used to generate code
// This file is auto-generated. Do not edit manually.
// reusable components or utilities
// basic function 
function identity<T>(x: T): T {
  return x;
}
const result = identity<string>('Hello, World!');// reusable components or utilities
const result_2 = identity<number>(100);// the T is for  genric type a placeholder 

let  str = identity("Hi"); // T is inferred as string not necessery to specify it explicitly

// grnaric array 
function identityArray<T>(arr: T[]): T[] {
  return arr;
}
const numberArray = identityArray<number>([1, 2, 3, 4]);
const stringArray = identityArray<string>(['a', 'b', 'c']);

// generic object
function identityObject<T extends object>(obj: T): T {
  return obj;
}
const person = identityObject({ name: 'John', age: 30 });
const car = identityObject({ make: 'Toyota', model: 'Camry', year:
    2020 });
// genaric interface 
interface GenericIdentityFn<T> {
  (arg: T): T;
}
const genericIdentity: GenericIdentityFn<string> = identity;
const genericResult = genericIdentity('Hello, TypeScript!');


// generic class
class GenericBox<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}
const numberBox = new GenericBox<number>(123);
const stringBox = new GenericBox<string>('Hello, Box!');



// generic constraints
function logLength<T extends { length: number }>(item: T): void {
    console.log(`Length: ${item.length}`);
    }
logLength('Hello, World!'); // String
logLength([1, 2, 3]); // Array
// grnaric type with multiple constraints
interface Lengthwise {
    length: number;
    }
function logLengthWithMultipleConstraints<T extends Lengthwise>(item: T): void {
    console.log(`Length: ${item.length}`);
    }
logLengthWithMultipleConstraints('Hello, World!'); // String
logLengthWithMultipleConstraints([1, 2, 3]); // Array
// genaric type with default type
function defaultIdentity<T = string>(x: T): T {
  return x;
}
const defaultResult = defaultIdentity(42); // T is inferred as numberArray
const defaultResult2 = defaultIdentity('Hello, Default!'); // T is inferred as string
//genaric inter view exmple 
// genaric stack claas
class GenericStack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
const numberStack = new GenericStack<number>();
numberStack.push(1);
numberStack.push(2);
const poppedNumber = numberStack.pop(); // 2
const peekedNumber = numberStack.peek(); // 1
const isEmptyNumberStack = numberStack.isEmpty(); // false
const stringStack = new GenericStack<string>();
stringStack.push('Hello');
stringStack.push('World');
const poppedString = stringStack.pop(); // 'World'
const peekedString = stringStack.peek(); // 'Hello'
const isEmptyStringStack = stringStack.isEmpty(); // false