import { defineStore } from 'pinia'
import AuthService from '../services/auth'
import { reactive } from 'vue'
import VueJwtDecode from 'vue-jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    user: null,
    token: null,
  })

  const login = async (email, password) => {
    try {
      const response = await AuthService.login(email, password)
      const decodedToken = VueJwtDecode.decode(response.access)
      console.log('Decoded Token:', decodedToken)
      state.user = decodedToken
    } catch (error) {
      console.log('Login error:', error)
      throw error
    }
  }

  return {
    state,
    login,
  }
})
