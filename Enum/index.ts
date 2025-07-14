// enum is in typescript is used to define a set of named constants
// enum is a special "class" that represents a group of constants (unchangeable variables)
// enum can be used to define a set of related values that can be used in a typescript
//example of enum in typescript 
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }
// let move: Direction = Direction.Up;
// console.log(move); // Output: UP
// by default, enums are starts from 0 and increment by 1

enum Direction {
    Up,
    Down,
    Left,   
    Right
}
let move: Direction = Direction.Up;
console.log(move); // Output: 0

// enum are by deafault  for number values
//but we can also use string values

//  real life example of enum in typescript
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
function getUserRole(role: UserRole): string {
    switch (role) {
        case UserRole.Admin:
            return "User is an Admin";
        case UserRole.User:
            return "User is a regular User";
        case UserRole.Guest:
            return "User is a Guest";
        default:
            return "Unknown role";
}
}
console.log(getUserRole(UserRole.Admin)); // Output: User is an Admin
console.log(getUserRole(UserRole.User)); // Output: User is a regular User
