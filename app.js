const express = require("express");
const connectDB = require("./db/connection");
const app = express();
const tasksRouter = require("./routes/tasks");
require("dotenv").config();

const port = 5000;
const run = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};
app.use(express.json());

app.use("/api/v1/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.send("Task Manager");
});

run();
