let posts = [
	{
		_id: '1', 
		title: 'Post!', 
		views: 11, 
		date: new Date().toLocaleString(), 
		comments: [1,2,3]
	},
	{
		_id: '2', 
		title: 'Post!', 
		views: 11, 
		date: new Date().toLocaleString(), 
		comments: [1,2,3]
	},
]


export const state = () => ({
	
})

export const mutations = {
	
}

export const actions = {
	async fetchAdminPosts() {
		return await new Promise(resolve => {
			setTimeout( () => {
				resolve(posts)
			}, 200)
		})
	},
	async fetchAdminPostById({}, id) {
		return await new Promise(resolve => {
			setTimeout( () => {
				resolve(posts.find(p => p._id.toString() === id.toString()))
			}, 200)
		})
	},
	async removePost({}, id){
		return await new Promise(resolve => {
			setTimeout( () => {
				resolve()
			}, 200)
		})
	},
	async createPost({}, {title, content, image}) {

		try{
			const data = new formData();
			data.append('title', title);
			data.append('content', content);
			data.append('image', image, image.name);

			return await new Promise(resolve => {
				setTimeout( () => {
					resolve()
				}, 200)
			})	
		}
		catch{
			commit('setError', e, {root: true})
			throw new Error(e);
		}
		
	} 
}

export const getters = {

}