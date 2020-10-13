import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    products: [],
    paginations: null,
    carts: [],
    notif: ''
  },
  mutations: {
    setMinus (state, index) {
      const container = [...state.carts]
      container[index].count -= 1
      state.carts = container
    },
    setPlus (state, index) {
      const container = [...state.carts]
      container[index].count += 1
      state.carts = container
    },
    setTodos (state, payload) {
      state.todos = payload
    },
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    },
    setProducts (state, payload) {
      // console.log(payload)
      state.products = payload
    },
    setDelete (state, id) {
      console.log(id)
      state.products = state.products.filter(item => item.id !== id)
    },
    setPaginations (state, payload) {
      state.paginations = payload
    },
    addCart (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.id === payload.id
      })
      console.log(isCart)
      if (!isCart) {
        const item = payload
        item.count = 1
        state.carts.push(item)
      } else {
        console.log(payload.id)
        state.carts = state.carts.filter((item) => {
          return item.id !== payload.id
        })
      }
    },
    removeFromCart (state, payload) {
      state.carts = state.carts.filter((item) => {
        return item.id !== payload.id
      })
    },
    setEmptyCart (state) {
      state.carts = []
    },
    setOrder (state, payload) {
      state.orders = payload
    },
    setNotif (state, payload) {
      state.notif = payload
    },
    setNotifActive (state, payload) {
      state.notifActive = payload
    }
  },
  actions: {
    interceptorsResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result.message)
        if (error.response.status === 401) {
          if (error.response.data.result.message === 'Token Invalid') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/')
            alert('maaf anda tidak boleh merubah token dengan sendirinya')
          } else if (error.response.data.result.message === 'Token Expired') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/')
            alert('maaf session habis silahkan login kembali')
          }
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (context) {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    login (context, payload) {
      context.commit('setNotif', 'loading')
      if (!payload.email) {
        context.commit('setNotif', 'Please insert your email')
      }
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/login`, payload)
          .then((res) => {
            context.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            context.commit('setNotif', 'Wellcome back ' + res.data.result.firstName)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err.response.data.result)
            context.commit('setNotif', err.response.data.result)
            context.commit('setNotifActive', true)
            reject(err)
          })
      })
    },
    register (context, payload) {
      context.commit('setNotif', 'loading')
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/users/register`, payload)
          .then((res) => {
            console.log(res)
            context.commit('setNotif', res.data.result.message)
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            resolve(res.data.result[0])
            router.push('/')
          })
          .catch((err) => {
            context.commit('setNotif', err.response.data.result)
            reject(err)
          })
      })
    },
    handleSearch (context, key) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/products?search=${key}`)
          .then((res) => {
            resolve(res.data.result)
            console.log(res.data.result)
            context.commit('setProducts', res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/api/v1/products${payload || ''}`)
          .then((res) => {
            // console.log(res)
            context.commit('setProducts', res.data.result)
            context.commit('setPaginations', res.data.paginations)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    insertProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/api/v1/products`, payload)
          .then((res) => {
            // console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/api/v1/products/` + payload.id, payload.data)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    deleteProduct (context, id) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_BASE_URL}/api/v1/products/` + id)
          .then((res) => {
            console.log(res.data)
            context.commit('setDelete', id)
            resolve(res.data)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getNotif (context, payload) {
      context.commit('setNotif', 'loading')
      context.commit('setNotif', payload)
    },
    getNotifActive (context, payload) {
      context.commit('setNotifActive', payload)
    }
  },
  getters: {
    getCount (state) {
      return state.count * 2
    },
    getTodos (state) {
      return state.todos
    },
    isLogin (state) {
      return state.token || localStorage.getItem('token')
    },
    isRegister (state) {
      return state.token !== null
    },
    getProducts (state) {
      console.log(state.products)
      return state.products
    },
    getPage (state) {
      return state.paginations
    },
    getCart (state) {
      return state.carts
    },
    countCart (state) {
      return state.carts.length
    },
    notif (state) {
      return state.notif
    },
    notifActive (state) {
      return state.notifActive
    }
  },
  modules: {
  }
})
