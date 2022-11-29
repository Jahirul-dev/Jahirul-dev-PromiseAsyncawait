
const asyncFunction = async ()=>{
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetchData.json();

    console.log(response);
}

asyncFunction()

console.log("Khepa");