app.post("/register/",function(req,res){
    var bodyStr = '';
    req.on("data",function(chunk){
        bodyStr += chunk.toString();
    });
    req.on("end",function(){
        res.send(bodyStr);
    });

});
