import api from './apiConfig'

export const getHeroes = async () => {
  try {
      const response = await api.get('/heroes')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getHero = async id => {
  try {
      const response = await api.get(`/heroes/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const displayAHero = async () => {
  try {
    const response = await api.get('/home')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getSpecialty = async () => {
  try {
    const response = await api.get('/create-hero')
    return response.data
  } catch (error) {
    throw error
  }
} 

export const createHero = async hero => {
  try {
      const response = await api.post('/create-hero', hero)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateHero = async (id, hero) => {
  try {
      const response = await api.put(`/heroes/${id}`, hero)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteHero = async id => {
  try {
      const response = await api.delete(`/heroes/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}