<template>

	<el-card 
		class="post"
		shadow="hover"
		:body-style="{padding: 0}"
		>
		<header slot="header">

		<h3 class="post-title">{{post.title}}</h3>
		<small>
			<i class="el-icon-time"></i>
			{{new Date(post.date).toLocaleString()}}
		</small>
		</header>
		<div class="post-body">
			<img :src="post.imageUrl" alt="Post_image">
		</div>
		<div class="post-footer">
			<el-button 
				round
				@click="onOpenPost(post._id)"
				>Читать
				<i class="el-icon-right el-icon-arrow-right"></i>
			</el-button>

			<span>
				<i class="el-icon-message"></i>
				{{post.comments.length}}
			</span>
		</div>
			
	</el-card>		
</template>

<script>

export default {
  name: 'Post',
  props: {
  	post: {
  		type: Object,
  		required: true
  	}
  },
  data () {
    return {

    }
  },

  methods: {
  	onOpenPost(id) {
  		
  		this.$router.push(`/post/${id}`)
  	}
  }

}
</script>

<style lang="css" scoped>
	.post {
		min-height: 200px;
		/*border: 1px solid silver;*/
		border-radius: 6px;
		margin-bottom: 20px;	
	}

	img {
		width: 100%;
		max-width: 100%;
	}

	.el-icon-arrow-right{
		margin-left: 10px;
	}

	.post-footer {
		padding: 18px;
		display: flex;
		align-items: center;
		justify-content: space-between;	
	}
</style>