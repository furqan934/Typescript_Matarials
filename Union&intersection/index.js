// union in type script 
var union;
union = "Hello"; // valid
union = 42; // also valid
// union = true; // invalid, Type 'boolean' is not assignable to type 'string | number'.
// union = { name: "John" }; // invalid, Type '{ name: string; }' is not assignable to type 'string | number'.
console.log(union); // Output: 42
// Use Case: Function with Multiple Input Types
function processInput(input) {
    if (typeof input === "string") {
        console.log("String input: ".concat(input));
    }
    else if (typeof input === "number") {
        console.log("Number input: ".concat(input));
    }
}
processInput("Hello"); // Output: String input: Hello
var userContact = {
    name: "Alice",
    age: 30,
    email: "alice@gmail.com",
    phone: "123-456-7890"
};
console.log(userContact); // Output: { name: 'Alice', age: 30,
var example = {
    x: 10,
    y: "Hello",
};
console.log(example); // Output: { x: 10, y: 'Hello' }
