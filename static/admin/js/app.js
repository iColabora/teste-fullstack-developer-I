const appRouter = (app, fs) => {};

module.exports = appRouter;

import axios from "axios";

const api = axios.create({
    baseURL: "https://ico-fullstack-test.herokuapp.com/v1/histograma",
})

export default api