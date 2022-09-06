const app = require('express')();
const dotenv= require('dotenv');
const e = require('express');
dotenv.config();

const port = process.env.PORT;

app.get('/isprime/:number', (req, res) => {
    result = isNumberPrime(req.params.number);
    res.send(result);
});

app.listen(port, (err) => {
    if(!err) console.log(`Server listning on ${port}`);
    else console.error(err);
});

function isNumberPrime(number){

    startTime = new Date();
    endTime = new Date();
    isPrime = true;

    for(let i = 3; i < number; i++){
        console.log(i);
        if(number % i === 0){
            endTime = new Date();
            isPrime = false;
            break;
        }
    }

    if(isPrime) endTime = new Date();

    return {
        "number": number,
        "time": endTime.getTime() - startTime.getTime(),
        "isPrime": isPrime
    };
}

