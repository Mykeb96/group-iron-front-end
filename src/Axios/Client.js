import axios from 'axios'

let api = axios.create({
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export default api