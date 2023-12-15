import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: 'e0f96a50c5e647059c75f5a9f880e43c'
    }
});