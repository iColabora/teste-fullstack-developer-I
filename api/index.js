const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const app = require('./static/admin/js/app.js')(app, fs);

const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port);
});
