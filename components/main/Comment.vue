<template>
	<el-card class="comment">
		<div class="comment-header">
			<span class="person-name"></span>
			<small>
				<i class="el-icon-time"></i>
				{{new Date(comment.date).toLocaleString()}}
			</small>
		</div>
		<div class="comment-name">
			{{comment.name}}
		</div>
		<div class="comment-text">
			{{comment.text}}
		</div>
	</el-card>
</template>

<script>
export default {

  name: 'Comment',
  props: {
  	comment: {
  		type: Object,
  		required: true
  	}
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>