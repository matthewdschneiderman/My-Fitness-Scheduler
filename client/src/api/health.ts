import axios from 'axios'

export const checkBackendHealth = async () => {
  try {
    const response = await axios.get('/api/health')
    console.log('Backend Health Check:', response.data)
  } catch (err) {
    console.log('Error Contacting backend', err)
  }
}