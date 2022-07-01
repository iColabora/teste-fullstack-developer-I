import axios from "axios";

const api = axios.create({
    baseURL: "https://ico-fullstack-test.herokuapp.com",
})

export default api;