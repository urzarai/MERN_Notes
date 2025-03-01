const fs = require('fs');
console.log(fs);


//writeFileSync
console.log("Starting");
fs.writeFileSync("Urza1.text","Hello from Urza");
console.log("Finished");

//writeFile
console.log("Starting");
fs.writeFile("Urza.txt","Hello from Urza Rai",()=>{
    console.log("File is created");
    console.log("File creation finished");
    fs.readFile("Urza2.txt","utf-8",(error,data)=>{
        console.log(error,data);
    });
    //alternative
    fs.readFile("Urza.txt",(error,data)=>{
        console.log(error,data.toString());
    });
});
console.log("Finished");

//appendFile
console.log("Starting");
fs.appendFile("Urza2.txt","\nToday is Friday",(e,d)=>{
    console.log(d);
})
console.log("Finished");