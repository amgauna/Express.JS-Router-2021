// Request streaming worked for me

req.on('end', function() {
    var paramstring = postdata.split("&");
});

var postdata = "";
req.on('data', function(postdataChunk){
    postdata += postdataChunk;
});
