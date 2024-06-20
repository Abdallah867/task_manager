const express = require("express");
const connectDB = require("./db/connection");
const app = express();
const tasksRouter = require("./routes/tasks");
const notFound = require("./middleware/not_found");
require("dotenv").config();

const port = 5000;

app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);

app.get("/", (req, res) => {
  res.send("Task Manager");
});

const run = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};

run();
