


console.log("1");

setTimeout(() => {
    console.log("2")
},0);

Promise.resolve(3).then((res) => {
        console.log(res);
});

console.log("4");