// src/api.js/createApi

api.post('/', function(req, res) {
 var queue = createQueue()
 var authHeader = req.get('Authorization')
