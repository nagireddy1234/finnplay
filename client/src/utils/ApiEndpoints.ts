import axios from 'axios'

export const baseUrl = 'http://localhost:4500'

export const apiEndpoints = {
    login: '/login',
    gamelist: '/gamelist',
}

export const API = axios.create({
    baseURL: baseUrl,
})
