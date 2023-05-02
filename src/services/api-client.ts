import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
       key:'b4fad0ef00d7408fad68bb5b88c5a1c3'
    }
})