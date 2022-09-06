const app = require('express')();
const dotenv= require('dotenv');
const service = require('./service/isprime');

dotenv.config();

const port = process.env.PORT;

app.get('/isprime/:number', (req, res) => {
    result = service.isNumberPrime(req.params.number);
    res.send(result);
});

app.listen(port, (err) => {
    if(!err) console.log(`Server listning on ${port}`);
    else console.error(err);
});

