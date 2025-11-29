import { defineStore } from 'pinia'
import { reactive } from 'vue'
import BarbeariaService from '@/services/barbearia'

export const useBarbeariaStore = defineStore('barbearia', () => {
  const state = reactive({
    barbearias: [],
    currentBarbearia: null,
    checked: false,
    meta: {},
    search: '',
  })

  async function fetchAll(page = 1, perPage = 999) {
    const response = await BarbeariaService.fetchAll(page, perPage)
    state.barbearias = response.data.results
    state.meta = {
      count: response.data.count,
      next: response.data.next,
      previous: response.data.previous
    }
    state.checked = true
    return response
  }

  async function fetchById(id) {
    const response = await BarbeariaService.fetchById(id)
    state.currentBarbearia = response.data   // sem .value
    return response
  }

  async function create(data) {
    const response = await BarbeariaService.create(data)
    await fetchAll()
    return response
  }

  async function update(data) {
    const response = await BarbeariaService.update(data)
    await fetchAll()
    return response
  }

  async function remove(id) {
    const response = await BarbeariaService.delete(id)
    await fetchAll()
    return response
  }

  return {
    state,
    fetchAll,
    fetchById,
    create,
    update,
    remove,
  }
})
  