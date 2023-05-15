const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;
const cors=require('cors')

const userRouter=require('./routes/userRouter')

app.use(express.json());
app.use(cors())

mongoose
  .connect(URI)
  .then(() => {
    console.log("connected");
    app.listen(PORT);
  })
  .catch((err) => {
    console.log("error", err);
  });

app.use(userRouter)

