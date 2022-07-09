const { readFileSync, writeFileSync } = require("fs");
console.log("starting first task");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

const third = writeFileSync("./content/third.txt", 
    `Here is the result : ${first}\t${second}`, 
    {flag : 'a'},
    "utf8");
console.log("done task");
const fourth = readFileSync("./content/third.txt", "utf8");
console.log(fourth);
console.log("done with this task");