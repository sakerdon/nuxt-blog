<template>
	<div class="post">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item to='/admin/list'>Posts</el-breadcrumb-item>
		  <el-breadcrumb-item>New post</el-breadcrumb-item>
		</el-breadcrumb>
		
		<h1>Create new post</h1>

		<el-button type="primary" @click="preview = true"><i class="el-icon-view"></i></el-button>

		<el-form :model="postForm" :rules="rules" ref="postForm" class="demo-postForm">
		
	

		  <el-form-item label="Title" prop="title">
		    <el-input v-model="postForm.title"></el-input>
		  </el-form-item>

		<div class="el-form-item__label w-100">Post Image</div>
		<el-upload
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-change="postImageChange"
		  :auto-upload="false"
		  ref="upload"
		  style='{width: 100%}'
		  >
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
		  <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
		</el-upload>

		  <el-form-item label="Content (.html or .md format)" prop="content">
		    <el-input v-model="postForm.content" type="textarea" rows="14"></el-input>
		  </el-form-item>

		  
		  <el-form-item>
		    <el-button :loading="loading" type="primary" @click.prevent="submitForm('postForm')">Login</el-button>
		  </el-form-item>
		</el-form>


		<el-dialog title="Preview" :visible.sync="preview" width="100%">
		  	
		  <vue-markdown :key="postForm.content">{{postForm.content}}</vue-markdown>

		</el-dialog>
	</div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'admin-auth',
  data() {
    return {
      loading: false,
      preview: false,
      image: null,
      postForm: {
        title: '',
        content: '',
      },	  
      rules: {
        title: [
          { required: true, message: 'Please input title', trigger: 'blur' },
          { min: 1, max: 300, message: 'Length should be 1 to 300', trigger: 'blur' }
        ],
        content: [
          { required: true, message: 'Please input text', trigger: 'blur' },
          { min: 1, max: Infinity, message: 'Length should be 1 symbol minimum', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
  	postImageChange(file){
  		console.log('file', file);
  		this.image = file.raw;
  	},
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
        	this.loading = true;

        	const data = {
        		title: this.postForm.title,
        		content: this.postForm.content,
        		image: this.image
        	}

        	await this.$store.dispatch('post/createPost', data);
    		this.$message.success('Post was created');

    		this.$refs.upload.clearFiles();
    		this.postForm.title = '';
    		this.postForm.content = '';

    		this.loading = false;

        } 

      });
    }
  }
}
</script>

<style lang="css" scoped>
	.w-100 {
		float: none;
		text-align: left;
	}
</style>