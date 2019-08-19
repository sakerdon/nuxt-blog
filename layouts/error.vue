<template>
<div class="error">
	<nuxt-link class="el-link el-link--primary" to="/">
		<i class="el-icon-back"></i>Go Home
	</nuxt-link>
	<h1>404</h1>
</div>
</template>

<script>
export default {

  name: 'error',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.error {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.el-link {
	font-size: 20px;
}
h1 {
	font-size: 100px;
	text-align: center;
}

</style>