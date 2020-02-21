let qs = require('qs')

export default {
  state: {
    me: null,
    token: window.localStorage.getItem('token')
  },
  mutations: {
    updateUser (state, data) {
      state.me = data
    },
    updateToken (state, data) {
      state.token = data
    }

  },
  actions: {
    getCurrentUser (context) {
      console.log('context', context)
      return window.axios.get('/users/me').then((response) => {
        console.log('response do getCurrente', response)
        context.commit('updateUser', response.data)
        return response
      })
    },
    authentication (context, user) {
      return window.axios.post('/users/token', qs.stringify(user)).then((response) => {
        context.commit('updateToken', response.data.token)
        window.localStorage.setItem('token', response.data.token)
        return response
      })
    },
    register (context, user) {
      return window.axios.post('/users/register', qs.stringify(user)).then((response) => {
        let authData = {
          username: user.email,
          password: user.password
        }
        return context.dispatch('authentication', authData)
      })
    }
  }
}
