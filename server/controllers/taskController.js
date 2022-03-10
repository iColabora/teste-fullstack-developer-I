const axios = require('axios');
const TASKS_API_URL = 'https://ico-fullstack-test.herokuapp.com/v1/histograma';

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await axios.get(TASKS_API_URL);
    res.status(200).json({
      status: 'success',
      results: tasks.data.length,
      tasks: tasks.data,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
