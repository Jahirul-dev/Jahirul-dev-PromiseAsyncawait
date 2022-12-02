let userlist = [];

const dataFunction = async ()=> {
    const datafetch = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const dataResponse = await datafetch.json()
    console.log(dataResponse.bpi.EUR.symbol);
    // for(let dataa in dataResponse){
    //     console.log(dataa.bpi.EUR);
    // }
    // console.log(dataResponse);
}

dataFunction()