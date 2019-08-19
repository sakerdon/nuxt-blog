<template>

	<el-card 
		class="post"
		shadow="hover"
		:body-style="{padding: 0}"
		>
		<header slot="header">
		<h3 class="post-title">{{text}}</h3>
		<small>
			<i class="el-icon-time"></i>
			{{new Date().toLocaleString()}}
		</small>
		</header>
		<div class="post-body">
			<img src="https://via.placeholder.com/800x600" alt="Post_image">
		</div>
		<div class="post-footer">
			<el-button 
				round
				@click="onOpenPost(text)"
				>Читать
				<i class="el-icon-right el-icon-arrow-right"></i>
			</el-button>

			<span>
				<i class="el-icon-message"></i>
				12
			</span>
		</div>
			
	</el-card>		
</template>

<script>

export default {
  name: 'Post',
  props: ['text'],
  data () {
    return {

    }
  },

  methods: {
  	onOpenPost(id) {
  		console.log(id);
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