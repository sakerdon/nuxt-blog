// let posts = [{
//     _id: '1',
//     title: 'Post!',
//     views: 11,
//     date: new Date().toLocaleString(),
//     comments: [1, 2, 3]
//   },
//   {
//     _id: '2',
//     title: 'Post!',
//     views: 11,
//     date: new Date().toLocaleString(),
//     comments: [1, 2, 3]
//   },
// ]


// export const state = () => ({

// })

// export const mutations = {

// }

export const actions = {

  async fetchPosts({ commit }) {
    try {
      const posts = await this.$axios.get('/api/post');
      return posts.data
    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }
  },

  async fetchPostById({ commit }, id) {
    try {
      const posts = await this.$axios.get('/api/post/' + id);
      return posts.data
    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }
  },

  async fetchAdminPosts({ commit }) {
    try {
      const posts = await this.$axios.get('/api/post/admin');
      return posts.data
    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }
  },

  async fetchAdminPostById({ commit }, id) {
    try {
      const posts = await this.$axios.get('/api/post/admin/' + id);
      return posts.data
    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }
  },
  async removePost({ commit }, id) {
    try {
      await this.$axios.$delete('/api/post/admin/' + id)
    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }
  },
  async createPost({ commit }, { title, text, image }) {

    try {
      const data = new FormData();
      data.append('title', title);
      data.append('text', text);
      data.append('image', image, image.name);

      return await this.$axios.post('/api/post/admin', data)

    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }

  },
  async updatePost({ commit }, { id, text, title }) {
    try {
      return await this.$axios.$put('/api/post/admin/' + id, {text, title})
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },

  async addView({commit}, {views, _id}){
    try {
      await this.$axios.$put('/api/post/add/view/' + _id, {views})
    } catch (e) {
      commit('setError', e, { root: true })
      throw new Error(e);
    }
  }
}

export const getters = {

}
