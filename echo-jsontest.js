$ curl -i -X GET http://echo.jsontest.com/key/value/anotherKey/anotherValue
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=ISO-8859-1
Date: Wed, 30 Oct 2013 22:19:10 GMT
Server: Google Frontend
Cache-Control: private
Alternate-Protocol: 80:quic,80:quic
Transfer-Encoding: chunked

{
   "anotherKey": "anotherValue",
   "key": "value"
}
$
