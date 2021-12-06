router.post('/login',function(req,res){
var user_name = req.body.user;
var password = req.body.password;
console.log("User name = "+user_name+", password is "+password);
res.end("yes");
});
