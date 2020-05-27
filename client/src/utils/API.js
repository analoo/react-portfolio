import axios from "axios";


export default {
    userData: function(id){
        return axios.get("/api/users/"+id);
    },

    allUsers: function(){
        return axios.get("/api/users")
    }

}

