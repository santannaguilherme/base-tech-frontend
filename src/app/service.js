import api from "../services/api"

const Service = {
    login: (user) => {
        api.post('login', user)
    }, 
    forumTitulos: () => {
        api.get('forum');
    }
}

export default Service