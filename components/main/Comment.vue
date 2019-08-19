<template>
	<el-card class="comment">
		<div class="comment-header">
			<span class="person-name"></span>
			<small>
				<i class="el-icon-time"></i>
				{{new Date().toLocaleString()}}
			</small>
		</div>
		<div class="comment-name">
			{{name}}
		</div>
		<div class="comment-text">
			{{comment}}
		</div>
	</el-card>
</template>

<script>
export default {

  name: 'Comment',
  props: ['name', 'comment'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>