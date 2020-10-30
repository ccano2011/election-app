import api from './apiConfig'

export const getRequests = async () => {
    try {
        const response = await api.get('/ballotreq')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getRequest = async id => {
    try {
        const response = await api.get(`/ballotreq/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createRequest = async request => {
    try {
        const response = await api.post('/ballotreq', request)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateRequest = async (id, request) => {
    try {
        const response = await api.put(`/ballotreq/${id}`, request)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteRequest = async id => {
    try {
        const response = await api.delete(`/ballotreq/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}