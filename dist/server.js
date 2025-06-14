// src/server.ts
import express from "express";
var app = express();
var PORT = process.env.PORT || 3e3;
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
