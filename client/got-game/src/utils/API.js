import axios from "axios";
const apiURL = "https://thronesapi.com/api/v2/Characters"

export default {
    getCharacters: function (query) {
        return axios.get(apiURL);
    }
};
