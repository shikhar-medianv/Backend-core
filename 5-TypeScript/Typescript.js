// TypeScript
// --> TypeScript is a syntactic superset of JavaScript which adds static typing.
// -------------------------------------------
// CMD - npm install typescript --save-dev
// Run - npx tsc <fileName>
// -------------------------------------------
// Basic Types
var age = 25;
var username = "Shikhar";
var isActive = true;
// Function with types
function createUser(user) {
    return "User ".concat(user.name, " created successfully");
}
var newUser = {
    id: 1,
    name: "Shikhar",
    isAdmin: true
};
console.log(createUser(newUser));
