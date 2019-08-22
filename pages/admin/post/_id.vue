<template>
	<div class="post">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item to='/admin/list'>Posts</el-breadcrumb-item>
		  <el-breadcrumb-item>{{post._id}}</el-breadcrumb-item>
		</el-breadcrumb>
		
		<el-form :model="postForm" :rules="rules" ref="postForm" class="demo-postForm">
		  <el-form-item label="Title" prop="title">
		    <el-input v-model="postForm.title"></el-input>
		  </el-form-item>

		  <el-form-item label="Content (.html or .md format)" prop="content">
		    <el-input v-model="postForm.content" type="textarea" rows="14"></el-input>
		  </el-form-item>

		  
		  <el-form-item>
		    <el-button :loading="loading" type="primary" @click.prevent="submitForm('postForm')">Login</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',
  async asyncData({store, route}) {
  	const post = await store.dispatch('post/fetchAdminPostById', route.params.id);
  	return {
  		post,
  		loading: false,
  		postForm: {
  		  title: post.title,
  		  content: '',
  		},	  
  		rules: {
  		  title: [
  		    { required: true, message: 'Please input title', trigger: 'change' },
  		    { min: 1, max: 300, message: 'Length should be 1 to 300', trigger: 'change' }
  		  ],
  		  content: [
  		    { required: true, message: 'Please input text', trigger: 'change' },
  		    { min: 1, max: Infinity, message: 'Length should be 1 symbol minimum', trigger: 'change' }
  		  ]
  		}
  	} 
  },
  // data() {
  //   return {
  //     loading: false,
  //     postForm: {
  //       title: '',
  //       content: '',
  //     },	  
  //     rules: {
  //       title: [
  //         { required: true, message: 'Please input title', trigger: 'change' },
  //         { min: 1, max: 300, message: 'Length should be 1 to 300', trigger: 'change' }
  //       ],
  //       content: [
  //         { required: true, message: 'Please input text', trigger: 'change' },
  //         { min: 1, max: Infinity, message: 'Length should be 1 symbol minimum', trigger: 'change' }
  //       ]
  //     }
  //   };
  // },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
        	this.loading = true;

        	const data = {
        		title: this.postForm.title,
        		content: this.postForm.content,
        	}
        	// await this.$store.dispatch('auth/login', data);
    		// this.$router.push('/admin')
    		// this.$message.success('you are logged in')


        } 

      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>