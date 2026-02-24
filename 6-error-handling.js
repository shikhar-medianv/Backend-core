// ======================================================
// Error Handling in JavaScript / Node.js
// ======================================================

// Error handling is critical in backend systems.
// It prevents crashes and ensures meaningful responses.

// ======================================================
// Basic try-catch
// ======================================================

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero")
    }
    return a / b
}

try {
    console.log("Result:", divide(10, 2))
    console.log("Result:", divide(10, 0))
} catch (error) {
    console.error("Caught Error:", error.message)
}


// ======================================================
// Custom Error Class
// ======================================================

class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

function createUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required")
    }
    return "User created successfully"
}

try {
    createUser({})
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message)
    } else {
        console.error("Unknown Error:", error.message)
    }
}


// ======================================================
// Async Error Handling (async/await)
// ======================================================

const fakeDatabaseCall = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Database connection failed"))
        }, 1000)
    });
};

async function fetchData() {
    try {
        const data = await fakeDatabaseCall()
        console.log(data)
    } catch (error) {
        console.error("Async Error:", error.message)
    }
}

fetchData();


// ======================================================
// Handling Promise Rejection (.catch)
// ======================================================

fakeDatabaseCall()
    .then(data => console.log(data))
    .catch(error => console.error("Promise Rejection:", error.message))


// ======================================================
// Operational vs Programming Errors
// ======================================================

// Operational Error → Expected (e.g., invalid input)
// Programming Error → Bug in code


function getUser(id) {
    if (typeof id !== "number") {
        throw new TypeError("User ID must be a number")  // programming error
    }
    if (id === 0) {
        throw new Error("User not found")  // operational error
    }
    return { id, name: "Shikhar" }
}

try {
    console.log(getUser("abc"))
} catch (error) {
    console.error("Handled:", error.message)
}


// ======================================================
// Express-Style Error Middleware Example
// ======================================================

// This is how backend frameworks like Express handle errors

/*
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).json({
    status: "error",
    message: err.message
  });
});
*/

// Frameworks like NestJS also provide built-in exception filters.
