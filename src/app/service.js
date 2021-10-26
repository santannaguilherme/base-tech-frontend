import api from "../services/api"

const service = {
    login: (user) => {
        api.post('login',user)
    }
}
export default service