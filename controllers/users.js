import { v4 as uuid } from "uuid";

let users = [];

// Fetch all users
export const getUsers = (req, res) => {
    res.status(200).json(users);  // Send users as JSON with status 200
};

// Create a new user
export const createUsers = (req, res) => {
    const { name, email, contact } = req.body;

    // Validate if all fields are present
    if (!name || !email || !contact) {
        return res.status(400).json({ message: "All fields (name, email, contact) are required" });
    }

    const newUser = { id: uuid(), name, email, contact };
    users.push(newUser);

    // Send a success response with status 201 and the newly created user
    res.status(201).json({
        message: "User added successfully",
        user: newUser,
    });
};

// Fetch a single user by ID
export const getUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    // If user not found, return 404
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Send the user with status 200
    res.status(200).json(user);
};

// Delete a user by ID
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === id);

    // If user not found, return 404
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    // Remove user from array
    users.splice(userIndex, 1);
    
    // Return success response
    res.status(200).json({ message: `User with ID ${id} deleted successfully` });
};

// Update a user by ID
export const updateUser = (req, res) => {
    const { name, email, contact } = req.body;
    const user = users.find((user) => user.id === req.params.id);

    // If user not found, return 404
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Update fields if provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (contact) user.contact = contact;

    // Return success response with updated user
    res.status(200).json({
        message: "User updated successfully",
        user,
    });
};
