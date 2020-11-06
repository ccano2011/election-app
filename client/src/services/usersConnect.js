import api from './apiConfig'

export const getUsers = async () => {
    try {
        const response = await api.get('/user')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getUser = async id => {
    try {
        const response = await api.get(`/user/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createUser = async request => {
    try {
        const response = await api.post('/user', request)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateUser = async (id, request) => {
    try {
        const response = await api.put(`/user/${id}`, request)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteUser = async id => {
    try {
        const response = await api.delete(`/user/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}