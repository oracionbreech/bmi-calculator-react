import axios from 'axios';

const API_URI = 'http://localhost:5000'

export const getImperialBMI = async (data: any) => {
    return await axios.post(`${API_URI}/bmi/imperial`, {
        ...data
    })
}