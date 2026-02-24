// ======================================================
// TypeScript
// --> TypeScript is a syntactic superset of JavaScript
// which adds static typing to JavaScript.
// ======================================================

// CMD - npm install typescript --save-dev
// Run - npx tsc <fileName>
// ------------------------------------------------------


// ======================================================
// Basic Types
// ======================================================

let age: number = 25
let username: string = "Shikhar"
let isActive: boolean = true
let hobbies: string[] = ["coding", "reading"]


// ======================================================
// Explicit Typing vs Type Inference
// ======================================================

// 1️⃣ Explicit Typing
let score: number = 90

// 2️⃣ Type Inference (TypeScript automatically detects type)
let city = "Mumbai" // inferred as string


// ======================================================
// Type: any
// --> Skips type checking (NOT recommended in production)
// ======================================================

let data: any = 10
data = "Now I'm a string"
data = true


// ======================================================
// Type: unknown
// --> Safer alternative to any
// You must check the type before using it
// ======================================================

let value: unknown = "Hello"

if (typeof value === "string") {
  console.log(value.toUpperCase())
}


// ======================================================
// Union Types
// --> Variable can hold multiple types
// ======================================================

let userId: number | string
userId = 101
userId = "A101"


// ======================================================
// Type Alias
// --> Used to create reusable custom types
// ======================================================

type Role = "ADMIN" | "USER" | "GUEST"

let userRole: Role = "ADMIN"


// ======================================================
// Enum
// --> Group of named constants
// ======================================================

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound) // 404
console.log(StatusCodes.Success)  // 200


// ======================================================
// Interface
// --> Defines structure of an object
// ======================================================

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
  email?: string; 
  readonly createdAt: Date; 
}

const newUser: User = {
  id: 1,
  name: "Shikhar",
  isAdmin: true,
  createdAt: new Date()
};


// ======================================================
// Function with Types
// ======================================================

function createUser(user: User): string {
  return `User ${user.name} created successfully`
}

console.log(createUser(newUser))


// ======================================================
// Generics
// --> Allows reusable and type-safe functions
// ======================================================

function wrapInArray<T>(value: T): T[] {
  return [value]
}

const numberArray = wrapInArray<number>(100)
const stringArray = wrapInArray<string>("TypeScript")

console.log(numberArray)
console.log(stringArray)


// ======================================================
// Tuples
// --> Fixed-length array with specific types
// ======================================================

let userTuple: [number, string] = [1, "Admin"]


// ======================================================
// Classes & Access Modifiers
// ======================================================

class Account {
  public owner: string
  private balance: number
  protected accountType: string

  constructor(owner: string, balance: number, accountType: string) {
    this.owner = owner
    this.balance = balance
    this.accountType = accountType
  }

  deposit(amount: number): void {
    this.balance += amount
  }

  getBalance(): number {
    return this.balance
  }
}

const myAccount = new Account("Shikhar", 5000, "Savings")
myAccount.deposit(2000)
console.log("Balance:", myAccount.getBalance())


// ======================================================
// Async Function with Types
// ======================================================

const fakeApiCall = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully")
    }, 1000)
  })
}

async function fetchData(): Promise<void> {
  const result = await fakeApiCall()
  console.log(result)
}

fetchData()


// ======================================================
// Utility Types
// ======================================================

// Partial --> Makes all properties optional
type PartialUser = Partial<User>

// Readonly --> Makes all properties readonly
type ReadonlyUser = Readonly<User>

const partialUser: PartialUser = {
  name: "Only Name"
}

console.log(partialUser)