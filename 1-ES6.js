// ES6 Features Demo

// let & const
const name = "Shikhar" // // cannot reassign
let age = 22  // can Change

// Arrow function
const greet = (user) => {
  return `Hello ${user}`
}

// Destructuring
const user = { id: 1, role: "admin" }
const { id, role } = user

// Spread operator
const updatedUser = { ...user, active: true }

console.log(greet(name))   // Output => Hello Shikhar
console.log(updatedUser)   // Output => { id: 1, role: 'admin', active: true }