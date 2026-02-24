// REST fundamentals

import express from "express"


const PORT = 3000
const app = express()
app.use(express.json())

let users = []

// GET
app.get("/users", (req, res) => {
  res.json(users)
})

// POST
app.post("/users", (req, res) => {
  const { name, email, isAdmin } = req.body

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and email are required"
    })
  }
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1
  const newUser = {
    id: newId,
    name,
    email,
    isAdmin: isAdmin || false
  }
  users.push(newUser)

  res.status(201).json(newUser)
})

// PUT
app.put("/users/:id", (req, res) => {
  const id = req.params.id
  const { name, email, isAdmin } = req.body

  const userIndex = users.findIndex((user) => user.id == id)

  if (userIndex == -1) {
    return res.status(404).json({ message: "User Not Found" })
  }
  if (!name || !email || typeof isAdmin != "boolean") {
    return res.status(400).json({ message: "All fields (name, email, isAdmin) are required" })
  }
  users[userIndex] = {
    id,
    name,
    email,
    isAdmin
  }
  res.json({
    message: "User fully updated",
    user: users[userIndex]
  });

})

// PATCH
app.patch("/users/:id", (req, res) => {
  const id = req.params.id

  const user = users.find(user => user.id == id)
  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }
  if (req.body.name !== undefined) {
    user.name = req.body.name
  }
  if (req.body.email !== undefined) {
    user.email = req.body.email
  }
  if (req.body.isAdmin !== undefined) {
    user.isAdmin = req.body.isAdmin
  }
  res.json({
    message: "User partially updated", user
  })
})

// DELETE
app.delete("/users/:id", (req, res) => {
  const id = req.params.id
  const userExists = users.some(user => user.id == id);

  if (!userExists) {
    return res.status(404).json({
      message: "No User Found"
    });
  }

  users = users.filter(u => u.id != req.params.id)
  res.json({ message: "User deleted" })
});


app.listen(PORT, () => {
  console.log("Server running on port 3000")
})