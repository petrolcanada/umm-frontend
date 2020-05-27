const express = require("express");
const appFrontEnd = express();
const appBackEnd = express();
const path = require("path");
const portFrontEnd = process.env.PORT || 5000;
const portBackEnd = process.env.PORT || 5001;

appFrontEnd.use(express.static(path.join(__dirname, "../build")));

appBackEnd.get("/api", (req, res) => {
  res.send("A B C D E F G");
});

appFrontEnd.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// appFrontEnd.listen(portFrontEnd);
appBackEnd.listen(portBackEnd);

// console.log("App is listening http://localhost:" + portFrontEnd);
console.log("API is listening http://localhost:" + portBackEnd);
