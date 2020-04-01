import axios from "axios";

export default {
    gmail: function (e) {
        // console.log(e);

        return axios.post("/api/form", e);
    }

    
};