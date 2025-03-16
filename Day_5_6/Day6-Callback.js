let browser ='Chrome';
function checkBrowserVersion(callback){
    setTimeout(()=>{
        console.log("Waiting for Data from  server");
        callback();
    },3000);        
    
}

function browserversion(){
    if(browser==='Chrome')
    console.log(`Browser version using callback: ${browser}`);
    
}

checkBrowserVersion(browserversion)