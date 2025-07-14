// This is an example of using the aliases we created above
var user1 = {
    name: "John Doe",
    age: 30,
};
// This is an example of using the interface we created above
var user2 = {
    name: "Jane Doe",
    age: 25,
    email: "jane@gmail.com",
};
// This function takes a callback function as an argument and calls it with a message
function greetUser(callback) {
    var message = "Hello, welcome to TypeScript!";
    callback(message);
}
// This is an example of using the ColoredRectangle interface
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "blue"
};
// This function takes a ColoredRectangle object and logs its properties
function logColoredRectangle(rectangle) {
    console.log("Height: ".concat(rectangle.height, ", Width: ").concat(rectangle.width, ", Color: ").concat(rectangle.color));
}
logColoredRectangle(coloredRectangle);
