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

		  <el-form-item label="Content (.html or .md format)" prop="text">
		    <el-input v-model="postForm.text" type="textarea" rows="14"></el-input>
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
  		  text: '',
  		},	  
  		rules: {
  		  title: [
  		    { required: true, message: 'Please input title', trigger: 'change' },
  		    { min: 1, max: 300, message: 'Length should be 1 to 300', trigger: 'change' }
  		  ],
  		  text: [
  		    { required: true, message: 'Please input text', trigger: 'change' },
  		    { min: 1, max: Infinity, message: 'Length should be 1 symbol minimum', trigger: 'change' }
  		  ]
  		}
  	} 
  },
  mounted() {
    this.postForm.text = this.post.text;
  },
  // data() {
  //   return {
  //     loading: false,
  //     postForm: {
  //       title: '',
  //       text: '',
  //     },	  
  //     rules: {
  //       title: [
  //         { required: true, message: 'Please input title', trigger: 'change' },
  //         { min: 1, max: 300, message: 'Length should be 1 to 300', trigger: 'change' }
  //       ],
  //       text: [
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
        		id: this.post._id,
        		text: this.postForm.text,
            title: this.postForm.title,
        	}

          try {
            await this.$store.dispatch('post/updatePost', data)
            this.$message.success('Post was updated')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        } 

      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>