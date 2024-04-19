#! /usr/bin/env node
 
 import inquirer from "inquirer";
 import chalk from "chalk"

 console.log(chalk.redBright("\t CURRENCY"));
   
 let currency_now:any={
    "PKR":277.98,
    "USA":1,
    "EUR":0.9407,
    "INR":83.5115,
    }
    let conversion= await inquirer.prompt([{
        name:"currencyfrom",
        type:"list",
        message:"select the currency to convert from:",
        choices:["PKR","EUR","USA","INR"]

    },
    {
        name:"currencyto",
        type:"list",
        message:"select the currency to convert to:",
        choices:["PKR","EUR","USA","INR"]
    },
    {
name:"amount",
type:"input",
message:"enter the amount to convert:"
    }

]
);
let amount_from=currency_now[conversion.currencyfrom];
let amount_to = currency_now[conversion.currencyto];
let converted=conversion.amount*amount_to;
console.log(converted);






 

