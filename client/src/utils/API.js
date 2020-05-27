import axios from "axios";


export default {
    userData: function(id){
        return axios.get("/api/users/"+id);
    },

    allUsers: function(){
        return axios.get("/api/users")
    },

    allProjects: function(userId){
        return axios.get(`/api/${userId}/projects`)
    },

    getTools: function(){
        return axios.get("/api/tools")
    },
    
    getOneProject: function(projid){
        return axios.get(`/api/project/${projid}`)
    }

}

