// O esquema é apenas duas propriedades unit_name e unit_price.
// ao receber o código do servidor final se parece com:

app.post('/add', function(req, res){
console.log('received request')
console.log(req.body);
let adunit = new AdUnit(req.body);
adunit.save()
.then(game => {
res.status(200).json({'adUnit':'AdUnit is added successfully'})
})
.catch(err => {
res.status(400).send('unable to save to database');
})
});
