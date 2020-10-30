import api from './apiConfig'


export const createPost = async ballot => {
  try {
    const response = await api.post('/ballots', ballot)
    return response.data
  } catch (error) {
    throw error
  }
}