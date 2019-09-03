<template>
  <article class="post">

  	<header class="post-header">
  	<nuxt-link class="el-link el-link--primary" to="/">
  		<i class="el-icon-back"></i>Back
  	</nuxt-link>
    <h1>{{post.title}}</h1>
    <small>
    	<i class="el-icon-time"></i>
    	{{new Date(post.date).toLocaleString()}}
    </small>
  	<small>views: {{post.views}}</small>
  	<img class="post-image" :src="post.imageUrl" alt="Photo">

  	</header>
  	<main class="post-body">
  	 <vue-markdown>{{post.text}}</vue-markdown>
  </main>

  <footer>
  	<div class="comments-form">
  	<h2>Your comment:</h2>
  		<app-comment-form 
        @created="onCommentCreated"
        :postId="post._id"
      ></app-comment-form>
  	</div>

  	<div class="comments" v-if="post.comments.length">
  		<h2>Comments:</h2>
  		<div v-for="(comment, i) in post.comments" >
  			<app-comment
        :comment="comment">
  			</app-comment>
  		</div>
  	</div>
  	<div class="comments-empty" v-else>No comments yet</div>
  </footer>
  </article>
</template>
<script>
import AppComment from '~/components/main/Comment'
import AppCommentForm from '~/components/main/CommentForm'

export default {

	components: {
		AppComment,
		AppCommentForm
	},

	methods: {
		onCommentCreated(data){
			this.post.comments.unshift(data)
		}
	},

  validate({ params }) {
    return Boolean(params.id);
  },

  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchPostById', params.id);
    await store.dispatch('post/addView', post)
    return {post};
  }

}

</script>
<style lang="css" scoped>
	.post {
		max-width: 700px;
		margin: auto;
		font-size: 18px;
		line-height: 1.7;
	}

	h1 {
		margin: 20px 0;
	}
	small{
		margin-bottom: 20px;
		display: block;
	}
	.post-image{
		display: block;
		margin-bottom: 30px;
	}
</style>
