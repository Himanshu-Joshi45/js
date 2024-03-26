const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is complete");
        resolve();
    },3000);
})
promiseOne.then(function(){
    console.log("promise is consumed");
})
