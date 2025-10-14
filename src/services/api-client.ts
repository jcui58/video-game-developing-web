import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '342aabe2527741cb961c159b04158dcf'
    }
})