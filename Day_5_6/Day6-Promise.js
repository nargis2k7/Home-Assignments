
let fetchDataFromDatabase = new Promise ((resolve,reject)=>{

    setTimeout(()=>{
        console.log( "Fetching data from database...")
    },10000)
    const data = true
    if(data)
        resolve("Data fetched successfully!");
    else 
    reject("Data not found!");
            
})
fetchDataFromDatabase.then(message=>{
    console.log("Data fetched successfullyssss!");
    
}) 
.catch(error=>{console.log("Data not found!");
})