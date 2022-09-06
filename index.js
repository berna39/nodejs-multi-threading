const app = require('express')();
const dotenv= require('dotenv');
const e = require('express');
dotenv.config();

const port = process.env.PORT;

app.listen(port, (err) => {
    if(!err) console.log(`Server listning on ${port}`);
    else console.error(err);
});

