// aplicativo do seu lado servidor

app.post('/add', function(req, res){
  console.log(req.body);
  request.post(
    {
    url:'http://localhost:6001/add',
    json: {
      unit_name:req.body.unit_name,
      unit_price:req.body.unit_price
        },
    headers: {
        'Content-Type': 'application/json'
    }
    },
  function(error, response, body){
    // console.log(error);
    // console.log(response);
    console.log(body);
    res.send(body);
  });
  // res.send("body");
});
