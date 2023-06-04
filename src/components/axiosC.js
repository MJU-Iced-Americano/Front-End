import axios from 'axios'
import { getCookie } from './Cookie'

export default axios.create({
    headers: {
        accessToken: getCookie('accessToken'),
    },
})