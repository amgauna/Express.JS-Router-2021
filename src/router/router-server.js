const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
// add router in express app
app.use("/",router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get(‘/’,(req, res) => {
res.sendfile(“index.html”);
});

router.post(‘/login’,(req, res) => {
var user_name = req.body.user;
var password = req.body.password;
console.log(“User name = “+user_name+”, password is “+password);
res.end(“yes”);
});

app.listen(3000,() => {
console.log("Sta
