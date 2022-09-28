const express = require("express");
const app = express();
const PORT = 5000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.static("./public"));

//routes
app.get("/", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/item", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      PORT,
      console.log(
        `Server is listening on port ${PORT}... please go to localhost:5000`
      )
    );
  } catch (error) {
    console.log(error);
  }
};
start();
