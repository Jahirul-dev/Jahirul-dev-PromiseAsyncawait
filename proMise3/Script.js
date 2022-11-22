const firstPromise = new Promise((rej, res)=>{
    let data = false;

    if(!false){
        res("Yas, data is false")
    }
    else{
        rej("No, data is invalid")
    }
})

const secondPromise = new Promise((rejected, response)=>{
    let data2 = true;

    if(!false){
        setTimeout(()=>{
            response("Data showed after severel second")
        },4000)
    }

            
})

secondPromise.then(value =>{
    console.log(value);
}).catch(err =>{
    console.error(err);
})

firstPromise.then(value=>{
    console.log(value);
})
.catch(err =>{
    console.error(err);
})