const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post(‘/handle’,(request,response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
console.log(request.body);
});

// add router in the Express app.
app.use("/", router);
