import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
});

let myusername = process.env.myusername;

console.log("value:", myusername);


console.log("start of backend project");
