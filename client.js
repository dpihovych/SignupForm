const requestPromise = fetch("http://localhost:3000")

requestPromise.then( response => 
    response.json()
)
.then(resp => console.log(resp))