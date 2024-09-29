import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);


app.all("*", (req, res) => res.status(404).send("Route doesn't exist"));

app.get("/test", (req, res) => {
    res.send("Test route is working");
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

