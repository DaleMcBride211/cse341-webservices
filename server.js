const express = require('express');
const app = express();
const lesson1Route = require('./routes');

const port = 3000;

app.use('/', lesson1Route);

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});