const url = fetch('https://jsonplaceholder.typicode.com/users')
 console.log(url);

 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => {
    return response.json()
 })
 .then(data => data.forEach(data=>{
    console.log(data);
 }))