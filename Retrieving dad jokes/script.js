const datafunction = async ()=>{
   const datas = await fetch("https://icanhazdadjoke.com/", {
    method:"GET",
    headers:{
        Accept: "application/json"
    }
   });
   const jokeData =await datas.json();
   console.log(jokeData.joke);
} 

datafunction()  