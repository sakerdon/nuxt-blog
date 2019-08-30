export const state = () => ({
	token: null
})

export const mutations = {
	setToken(state, token) {
		state.token = token;
	},
	clearToken(state) {
		state.token = null;
	}
}

export const actions = {
	async login({commit, dispatch}, formData) {
		console.log(formData);
		try {
			const {token} = await this.$axios.$post('/api/auth/admin/login', formData);
			console.log('test', token);
			dispatch('setToken', token)
		} 
		catch (e) {
			commit('setError', e, {root: true});
			throw e
		}
		
	},
	setToken({commit}, token){
		this.$axios.setToken(token, 'Bearer')
		commit('setToken', token)
	},
	logout({commit}){
		commit('clearToken')
		this.$axios.setToken(false)
	},

	async createUser({commit, dispatch}, formData) {

		try {
			await this.$axios.$post('/api/auth/admin/create', formData)
		} catch (e) {
			throw new Error(e)
		}
		console.log('create user', formData);
	}
}


export const getters = {
	isAuth: (state) => Boolean(state.token),
	token: (state) => state.token
}