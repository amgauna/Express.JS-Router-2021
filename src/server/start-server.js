// spec/HTTPRequest.spec.js/startServer

function startServer(done) {
 const app = express();
 app.use(bodyParser.json({ type: '*/*' }));
 app.get('/hello', function(req, res) {
  res.json({ response: 'OK' });
 });

 app.get('/404', function(req, res) {
  res.status(404);
  res.send('NO');
 });

 app.get('/301', function(req, res) {
  res.status(301);
  res.location('/hello');
  res.send();
 });

 app.post('/echo', function(req, res) {
  res.json(req.body);
 });

 app.get('/qs', function(req, res) {
  res.json(req.query);
 });

 return app.listen(13371, undefined, done);
}
