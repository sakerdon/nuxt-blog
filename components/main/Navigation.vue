<template>
	<nav>
		<nuxt-link :underline="false" class="logo" to="/" type="primary">
		<i class="el-icon-eleme"></i>
		BestBlog</nuxt-link>
		
		<nuxt-link  class="el-link el-link--primary" to="/admin">
				<i class="el-icon-user"></i> Account
		</nuxt-link>

		<!-- <nuxt-link v-else class="el-link el-link--primary" to="/admin/logout">
				Logout <i class="el-icon-right"></i>
		</nuxt-link> -->
		

	</nav>
</template>

<script>
export default {

  name: 'Navigation',

  data () {
    return {

    }
  },
  computed: {
  	isLogin() {
  		return this.$store.getters['auth/isAuth']
  	}
  }
}
</script>

<style lang="css" scoped>
	nav {
		border-bottom: 1px solid lightgray;
		height: 100%;
		display: flex;
		align-items: center;
		font-weight: 700;
		justify-content: space-between;
	}

	.logo {
		font-size: 22px;
		color: #409eff;
		text-decoration: none;
		font-weight: normal;
	}

	.account {
		font-size: 22px;


	}

</style>