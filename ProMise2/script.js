const promise = new Promise((res, rej)=>{
    const data = 2;
    let data2 = 5
    if(data > data2){
        res("Yes, data is higher")
    }
    else
        rej("No, data has error ")
})

promise.then(val =>{
    return val + 1;
})
.then(vval1 => {
    console.log(vval1);
})
.catch(err =>{
    console.error(err);
})