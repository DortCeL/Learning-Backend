const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from node API hehe");
});

app.post("/api/products", (req, res) => {
  res.send("data received!");
});

mongoose
  .connect(
    "mongodb+srv://DortCeL:13MBDB0501040@learning-backend.eemuwzl.mongodb.net/Learning-Backend?retryWrites=true&w=majority&appName=Learning-Backend"
  )
  .then(() => {
    console.log("connected to the database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
