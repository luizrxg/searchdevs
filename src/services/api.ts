import axios from "axios";
let refreshpromise = null;

const api = axios.create({
    baseURL: "https://www.arcomnews.com.br/api"
});
