

const dataFunction = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await data.json();
    // response.map(datas =>{
    //     console.log(datas.email);
    // })
    return response
}

const callDataFunctions = async ()=>{
    const fromFunction = await dataFunction();
    // console.log(fromFunction.email);
    fromFunction.map(datas =>{
        console.log(datas.email);
    })
}

callDataFunctions()