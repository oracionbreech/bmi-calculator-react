import axios from 'axios';

const API_URI = 'http://localhost:5000'

export const getMetricBMI = async (data: any) => {
    return await axios.post(`${API_URI}/bmi/metric`, {
        ...data
    })
}