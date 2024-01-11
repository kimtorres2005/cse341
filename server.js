const express = require('express');
const app = express();

app.get('/kimberly', (req, res) => {
    res.send('Hello Kim!');
});

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));
