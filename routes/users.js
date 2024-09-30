import express from "express";

const router = express.Router();

// Sample users data (you can later replace this with a database call)
let users = [
  { id: 1, name: "John Doe", email: "johndoe@gmail.com", contact: "123456789" },
  { id: 2, name: "James Bond", email: "jamesbond@gmail.com", contact: "987654321" }
];

// GET request to return all users
router.get("/users", (req, res) => {
  res.json(users);
});

// POST request to add a new user
router.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1, // Simple way to generate a new user ID
    ...req.body           // Spread the body of the request into the new user object
  };
  
  users.push(newUser);    // Add the new user to the users array
  res.status(201).json(newUser); // Respond with the new user and a 201 status
});

// DELETE request to remove a user by ID
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;  // Get the ID from the URL parameters
  users = users.filter(user => user.id !== parseInt(id)); // Filter out the user with the matching ID
  
  res.status(200).json({ message: "User deleted successfully" }); // Respond with success message
});

export default router; // Export the router to use in the main app


