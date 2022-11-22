// let data = false;
// // data = !data;
// console.log(data);

// if(!data == true){
//     console.log("Found the access");
// }

const myPromise = new Promise((resolve, reject)=>{
    let error = false;
    if(!error){
        resolve("Yes, data resolved")
    }
    else{
        reject("No, data is not resolved")
    }
})
console.log(myPromise);