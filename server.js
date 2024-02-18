require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");


const userRouter = require("./routes/user");



// DB connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");
}


//  Middlewares / assets
app.use(express.json());
// app.use(express.urlencoded());


//  Seprate user routing file
app.use("/users", userRouter.router);





app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}....`);
});
