const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const fs = require('fs');


app.use(express.static(path.join(__dirname, "src")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});

const url = "https://ico-fullstack-test.herokuapp.com/v1/histograma";
