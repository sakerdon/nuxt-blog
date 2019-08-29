<template>
	<div class="wrapper">
		<nuxt/>
	</div>
</template>

<script>
export default {

  name: 'empty',

  data () {
    return {

    }
  }, 
  computed: {
  	error() {
  		return this.$store.getters.error
  	}
  },
  watch: {
  	error(value) {
  		this.$message.error(value.response.data.message)
  	}
  }
}
</script>

<style lang="css" scoped>
.wrapper {
	display: flex;
	width: 100%;
	height: 100vh;
	align-items: center;
	justify-content: center;	
}
</style>