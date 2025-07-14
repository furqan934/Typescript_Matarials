// object with typescript
const obj: { [key: string]: string } = {
  name: "John", 
    age: "30",
    city: "New York"
};
console.log(obj);
// Accessing properties
console.log(obj.name); // John
console.log(obj["age"]); // 30
// Adding a new property
obj.country = "USA";

// Removing a property
delete obj.city;

const car: { type: string; model:string, electric?: boolean } = {
    type: "Sedan",
    model: "Tesla Model 3",
    electric: true  
}
console.log(car);