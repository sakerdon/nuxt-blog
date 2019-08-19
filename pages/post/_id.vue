<template>
  <article class="post">

  	<header class="post-header">
  	<nuxt-link class="el-link el-link--primary" to="/">
  		<i class="el-icon-back"></i>Back
  	</nuxt-link>
    <h1>Post</h1>
    <small>
    	<i class="el-icon-time"></i>
    	{{new Date().toLocaleString()}}
    </small>
  	<small>views: 44</small>
  	<img class="post-image" src="https://via.placeholder.com/800x600" alt="Photo">

  	</header>
  	<main class="post-body">
  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam a consequuntur, nihil. Voluptate, fugit sunt alias error nobis, necessitatibus vero quisquam mollitia odit non. Ducimus, repellendus enim nemo debitis aperiam.</p>
  </main>

  <footer>
  	<div class="comments-form">
  	<h2>Your comment:</h2>
  		<app-comment-form @created="onCommentCreated"></app-comment-form>
  	</div>

  	<div class="comments" v-if="true">
  		<h2>Comments:</h2>
  		<div v-for="(comment, i) in comments" >
  			<app-comment :comment="comment.comment" :name="comment.name">		
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
			console.log('coment:', data);
			this.comments.unshift(data)
		}
	},

	mounted(){
	},

  validate({ params }) {
    return Boolean(params.id)
  },


  data(context) {
    return {
    	comments: [
    			{name: "Ivan", comment: "	Lorem ipsum dolor sit amet."},
    			{name: "Mike", comment: "	Lorem"},
    	]
    	
    }
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
