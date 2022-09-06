const app = require('express')();
const dotenv= require('dotenv');
const { fork } = require('child_process');

dotenv.config();

const port = process.env.PORT;

app.get('/isprime/:number', (req, res) => {
    
    const child_process = fork('./service/forkedprocess.js');
    child_process.send({ "number": parseInt(req.params.number) });
    child_process.on("message", message => res.send(message));

});

app.listen(port, (err) => {
    if(!err) console.log(`Server listning on ${port}`);
    else console.error(err);
});

