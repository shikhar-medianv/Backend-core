// TypeScript
// --> TypeScript is a syntactic superset of JavaScript which adds static typing.
// -------------------------------------------
// CMD - npm install typescript --save-dev
// Run - npx tsc <fileName>
// -------------------------------------------
// Basic Types
let age: number = 25;
let username: string = "Shikhar";
let isActive: boolean = true;


// TypeScript offers two ways to work with types:

// 1-Explicit Typing => You explicitly declare the type of a variable
// 2-Type Inference => TypeScript automatically determines the type based on the assigned value

// ----------------------------------------------
// Type: any
// The any type is the most flexible type in TypeScript.
// It essentially tells the compiler to skip type checking for a particular variable.

// ----------------------------------------------
// Type: unknown
// The unknown type is a type-safe counterpart of any.
// It's the type-safe way to say "this could be anything, 
// so you must perform some type of checking before you use it".
// --------------------------------------------------
// Interface
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

// Function with types
function createUser(user: User): string {
  return `User ${user.name} created successfully`;
}

const newUser: User = {
  id: 1,
  name: "Shikhar",
  isAdmin: true
};

console.log(createUser(newUser));