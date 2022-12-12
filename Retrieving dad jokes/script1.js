const datafunction = async ()=>{
    const datas = await fetch("https://icanhazdadjoke.com/", {
     method:"GET",
     headers:{
         Accept: "text/plain"
     }
    });
    const jokeData =await datas.text();
    console.log(jokeData);
 } 
 
 datafunction()