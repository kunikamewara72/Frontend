import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js"; // Ensure the path is correct

const app = express();
const port = 5000;

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

app.use("/", userRoutes); // Use the user routes

// Test route to confirm the server is working
app.get("/test", (req, res) => {
    res.send("Test route is working");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


