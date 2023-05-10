import api from "./api"

const apiRoutes = {
    getUser: (username: string) => api.get(`${username}`),
    getRepositories: (username: string) => api.get(`${username}/repos`)
}

export default apiRoutes
