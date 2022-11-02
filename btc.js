"use strict";

const https = require('https');

const args = require('./args');

const defaultCurrency ="USD"

const option = {
    host: "api.coindesk.com",
    path: "/v1/bpi/currentprice.json",
    method: "GET"
}

console.log('====================================');
console.log(args.currency);
console.log('====================================');
let currency = args.currency ?? defaultCurrency;
// if(currency == undefined || currency.length <= 0){
//     currency = defaultCurrency;
// }



const request = https.request(option, response =>{
    let content = '';

    response.on('data', chunk => {
        content += chunk;
        console.log('====================================');
        console.log( chunk );
        console.log('====================================');
    
    })
    
    // console.log(content);
        response.on('end',() =>{
            const json = JSON.parse(content);

            const bpi = json.bpi;

            const price = bpi[currency]
            
            if(price){
                console.log('====================================');
                console.log(`1 BTC vaux ${price.rate} ${currency}`);
                console.log('====================================');
            } 
            else {
                console.log('====================================');
                console.log('La devise est inconnue');
                console.log('====================================');
            };

            // console.log('====================================');
            // console.log(bpi);
            // console.log('====================================');
        });
});

request.end();