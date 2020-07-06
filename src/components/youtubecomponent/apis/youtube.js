import axios from 'axios';

const axiosCreate = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/"
})

export {axiosCreate}
