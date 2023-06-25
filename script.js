


/*

console.log("1");

setTimeout(() => {
    console.log("2")
}, 0);

Promise.resolve(3).then((res) => {
        console.log(res);
});

console.log("4");

for( let i = 0; i < 1000000000; i++){

}

*/

const prom = new Promise((resolve, reject) => {
        if( new Date() < new Date("01-01-2024")){
            reject(new Error("Error"));
        }
        resolve("Success");
});

prom.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});


function timeOut(sec){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve();
        }, sec * 1000);
    });
}

timeOut(2).then(() => {
    console.log("Everything is fine")
    return timeOut(2);
}).then(() => {
    console.log("Everything is fine")
    return timeOut(2);
}).then(() => {
    console.log("Everything is fine")
    return timeOut(2);
});