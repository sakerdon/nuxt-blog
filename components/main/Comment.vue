<template>
	<el-card class="comment" shadow="never">
		<div class="comment-header">
			<div class="comment-name">
				{{comment.name}}
			</div>

			<small>
				<i class="el-icon-time"></i>
				{{new Date(comment.date).toLocaleString()}}
			</small>
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
.comment {
	margin: 10px 0;
}
.comment-header {
	font-size: 14px;
	opacity: .8;
	margin-bottom: 5px;
	display: flex;
	justify-content: space-between;
}
.comment-name {
	font-size: 12px;
}

.comment-text {
	font-size: 14px;
	color: black;
}
</style>