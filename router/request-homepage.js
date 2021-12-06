// app.post('/', function (req, res) { res.send('POST request to homepage') })

var express        =         require("express");
2
var bodyParser     =         require("body-parser");
3
var app            =         express();
4
​
5
app.use(bodyParser.urlencoded({ extended: false }));
6
app.use(bodyParser.json());
7
​
8
app.get('/',function(req,res){
9
  res.sendfile("index.html");
10
});
11
app.post('/login',function(req,res){
12
  var user_name=req.body.user;
13
  var password=req.body.password;
14
  console.log("User name = "+user_name+", password is "+password);
15
  res.end("yes");
16
});
17
app.listen(3000,function(){
18
  console.log("Started on PORT 3000");
19
})
