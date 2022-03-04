const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.listen(3000,() => {
console.log("Started on PORT 3000");
})
