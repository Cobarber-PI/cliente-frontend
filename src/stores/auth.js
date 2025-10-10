import { defineStore } from 'pinia'
import AuthService from '../services/auth'
import { useLocalStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', () => {
  const state = useLocalStorage('auth_state', {
    user: null,
    token: null,
  })

  const login = async (email, password) => {
    try {
      const response = await AuthService.login(email, password)
      state.value.token = response.access

      const meData = await AuthService.getUserProfile(response.access)
      state.value.user = meData
    } catch (error) {
      console.log('Login error:', error)
      throw error
    }
  }

  const me = async (token = state.value.token) => {
    try {
      const meData = await AuthService.getUserProfile(token)
      state.value.user = meData
    } catch (error) {
      console.log('Get user profile error:', error)
      throw error
    }
  }

  const logout = () => {
    state.value.user = null
    state.value.token = null
  }

  return {
    state,
    login,
    logout,
    me
  }
})
