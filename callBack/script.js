const callBackCall = (pera, callBack)=>{
    callBack()
    console.log(pera);
}

const callBackChild = ()=>{
    console.log("test");
}

callBackCall("Gone", ()=>{
    callBackChild;
})



