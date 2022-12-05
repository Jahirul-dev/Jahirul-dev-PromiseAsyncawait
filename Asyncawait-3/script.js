const myUser = {
    data:[]
}

const anotherFunction = async ()=>{
    const response = await fetch('https://catfact.ninja/fact')
    const responseData = await response.json();
    return responseData;

}

const callAnotherFunction = async ()=>{
    data = await anotherFunction()
    myUser.data = data
    console.log(myUser.data);
    console.log(myUser.data.length);

}

callAnotherFunction()

