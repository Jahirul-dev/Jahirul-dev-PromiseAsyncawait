let userlist = [];

const dataFunction = async ()=> {
    const datafetch = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const dataResponse = await datafetch.json()
    console.log(dataResponse.disclaimer);

}

dataFunction()