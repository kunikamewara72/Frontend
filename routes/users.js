import express from "express";
import {getUsers, createUsers, deleteUser, updateUser, getUser} from "../controllers/users.js"; // Make sure you import getUser

const router = express.Router();

// Get all users
router.get("/users", getUsers);

// Create a new user
router.post("/user", createUsers);

// Get a single user by ID
router.get("/user/:id", getUser); // This route should use getUser, not getUsers

// Delete a user by ID
router.delete("/user/:id", deleteUser);

// Update a user by ID
router.put("/user/:id", updateUser);

export default router;
