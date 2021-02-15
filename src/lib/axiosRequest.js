import { API_KEY, URL } from "config/config.json"
import axios from "axios"

export const axiosRequest = async (query) => {
    const response = await axios.get(`${URL}?${query}`, {
        headers: {
            Authorization: `KakaoAK ${API_KEY}`,
        },
    })
    const data = response.data
    return data
}
