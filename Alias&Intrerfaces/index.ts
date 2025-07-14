// aliases : are usedd to gives a name to any type — not just objects.
// This is useful for making code more readable and maintainable.
// In this example, we create an alias for a type that represents a string or a number. , array and object
type StringOrNumber = string | number;
type StringArray = string[];
type StringOrNumberArray = (string | number)[];
type callbackFunction = (message: string) => void;
type User = {
  name: string;
  age: number;
};
// This is an example of using the aliases we created above
const user1: User = {
    name: "John Doe",
    age: 30,
    };

// interface : is a way to define a contract for an object. It allows you to specify the shape of an object, including its properties and their types.
interface UserInterface {
    name: string;
    age: number;
    email?: string; // optional property
    }
// This is an example of using the interface we created above
const user2: UserInterface = {  
    name: "Jane Doe",
    age: 25,
    email: "jane@gmail.com",
    };
// This function takes a callback function as an argument and calls it with a message
function greetUser(callback: callbackFunction): void {
    const message = "Hello, welcome to TypeScript!";
    callback(message);
}
//extends : is used to create a new interface that inherits properties from another interface. This allows you to create more specific interfaces based on existing ones.
interface Rectangle {
  height: number,
  width: number
}
interface ColoredRectangle extends Rectangle {
  color: string
}
// This is an example of using the ColoredRectangle interface
const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "blue"
};
// This function takes a ColoredRectangle object and logs its properties
function logColoredRectangle(rectangle: ColoredRectangle): void {
  console.log(`Height: ${rectangle.height}, Width: ${rectangle.width}, Color: ${rectangle.color}`);
}
logColoredRectangle(coloredRectangle);