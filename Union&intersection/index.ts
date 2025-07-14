// union in type script 
let union: string | number;
union = "Hello"; // valid
union = 42; // also valid
// union = true; // invalid, Type 'boolean' is not assignable to type 'string | number'.
// union = { name: "John" }; // invalid, Type '{ name: string; }' is not assignable to type 'string | number'.
console.log(union); // Output: 42

// Use Case: Function with Multiple Input Types
function processInput(input: string | number): void {
    if (typeof input === "string") {
        console.log(`String input: ${input}`);
    } else if (typeof input === "number") {
        console.log(`Number input: ${input}`);
    }
}
processInput("Hello"); // Output: String input: Hello

// intersection in type script is used for 
// combining multiple types into one
//interrsection with interface   
interface User {
    name: string;
    age: number;
}
interface Contact {
    email: string;
    phone: string;
}
type UserContact = User & Contact;
const userContact: UserContact = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
    phone: "123-456-7890"
};
console.log(userContact); // Output: { name: 'Alice', age: 30,

//interrsection with type 
type A = { x: number };
type B = { y: string };
type C = A & B;
const example : C = {
    x : 10,
    y : "Hello",
}
console.log(example); // Output: { x: 10, y: 'Hello' }