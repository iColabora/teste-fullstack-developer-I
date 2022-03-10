const express = require('express');
const cors = require('cors');

const taskRouter = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

app.use(cors());

// ROUTES
app.use('/tasks', taskRouter);

module.exports = app;
