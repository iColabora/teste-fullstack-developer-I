//import Vue from 'vue'
//import { BootstrapVue } from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import { createPopper } from '@popperjs/core';
//import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
//import flip from '@popperjs/core/lib/modifiers/flip.js';
//Vue.use(BootstrapVue)



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('../src/routes')(app, fs);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
