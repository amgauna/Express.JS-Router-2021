componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

    // From the client side:
    // Fetches our GET route from the Express server. 
    // (Note the route we are fetching matches the GET route from server.js

    callBackendAPI = async() => {
    const response = await fetch('/express_backend/'  + iAmTheWordId, {method: 'POST', body: JSON.stringify(myData)} );                                               
    const body = await response.json();
        
    app.post('/express_backend/:word_id', (req, res) => {
    //console.log(req.params)
    res.send('success')
    var word_id = req.params.word_id;
    console.log(results)
    return results; }

    if (response.status !== 200) {
      throw Error(body.message) 
    }
console.log(body);
    return body;
  };         

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
