const mongoose=require("mongoose");

// const connectionString = "mongodb+srv://vitor_admin:xNx3q00tSIXhHXsU@taskmanager.nxyrxuw.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  // .then(() => console.log("CONNECTE TO THE DB..."))
  // .catch((err) => console.log(err));
};

module.exports = connectDB;
