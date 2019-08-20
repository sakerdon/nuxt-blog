export const state = () => ({
	token: true
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
		try {
			const token = await new Promise( (resolve, reject) => {
				setTimeout( () => resolve('token'), 1000)
			});
			dispatch('setToken', token)
		} 
		catch (e) {
			commit('setError', e, {root: true});
			throw e
		}
		
	},
	setToken({commit}, token){
		commit('setToken', token)
	},
	logout({commit}){
		commit('clearToken')
	},

	async createUser({commit, dispatch}, formData) {
		console.log('create user', formData);
	}



}

export const getters = {
	isAuth: (state) => Boolean(state.token) 
}