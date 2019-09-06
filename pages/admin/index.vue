<template>
	<div class="post">
		<el-breadcrumb separator="/">
		  <el-breadcrumb-item to='/admin/list'>Posts</el-breadcrumb-item>
		  <el-breadcrumb-item>New post</el-breadcrumb-item>
		</el-breadcrumb>
		
		<h2>Create new post</h2>
    <el-form :model="postForm" :rules="rules" ref="postForm" class="demo-postForm">
    <el-row :gutter="20">
      <el-col :span="16">

          <el-form-item label="Title" prop="title">
            <el-input v-model="postForm.title"></el-input>
          </el-form-item>

            <el-form-item label="Content (.html or .md format)" prop="text">
              <el-input v-model="postForm.text" type="textarea" rows="14"></el-input>
            </el-form-item>

      </el-col>
            

      <el-col :span="8">
        

        <div class="el-form-item is-required">
          <div class="el-form-item__label w-100">Post Image</div>
        <el-upload
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="postImageChange"
          :auto-upload="false"
          ref="upload"
          :class="{'is-error-image': isErrorImage}"
          >
          <img class="preview-upload" v-if="imageUrl" :src="imageUrl" alt="image">

          <template v-else>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip">jpg/png files with a size less than 1Mb</div>
          </template>
            
        </el-upload>
        </div> 
		    <el-button type="primary" @click="preview = true">
          <i class="el-icon-view"></i> Preview post
        </el-button>

        <el-button :loading="loading" 
            type="success" 
            @click.prevent="submitForm('postForm')">
            <i class="el-icon-plus"> </i> Create post</el-button>
            
    
      </el-col>
    </el-row>
    </el-form>            
		  	
		<el-dialog title="Preview" :visible.sync="preview" width="100%">
      <div class="preview-container">
          <img  align="center" v-if="imageUrl" :src="imageUrl" alt="image">
		      <vue-markdown class="preview-text" v-if="postForm.text" :key="postForm.text">{{postForm.text}}</vue-markdown>
          <div v-else align="center">Nothing to show. Write anything in text field.</div>
      </div>
        

		</el-dialog>

	</div>
</template>

<script>
export default {
  head() {
    return {
      title: process.env.appName + ':: Create post'
    }

  },
  layout: 'admin',
  middleware: 'admin-auth',
  data() {
    return {
      loading: false,
      preview: false,
      image: null,
      imageUrl: '',
      isErrorImage: false,
      postForm: {
        title: '',
        text: '',
        image: null,
      },	  
      rules: {
        title: [
          { required: true, message: 'Please input title', trigger: 'blur' },
          { min: 1, max: 300, message: 'Length should be 1 to 300', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Please input text', trigger: 'blur' },
          { min: 1, max: Infinity, message: 'Length should be 1 symbol minimum', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {

  	postImageChange(file){
  		console.log('file', file);
  		this.image = file.raw;
      this.imageUrl = URL.createObjectURL(file.raw);
      this.isErrorImage = false;
  	},
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (!this.image) {
          this.isErrorImage = true;
          this.$message.error('Image is required');
          valid = false
        }

        if (valid) {
        	this.loading = true;

        	const formData = {
        		title: this.postForm.title,
        		text: this.postForm.text,
        		image: this.image
        	}

        await this.$store.dispatch('post/createPost', formData);
    		this.$message.success('Post was created');

    		this.$refs.upload.clearFiles();
    		this.postForm.title = '';
    		this.postForm.text = '';
        this.image = null;
        this.imageUrl = '';

    		this.loading = false;

        } 

      });
    }
  }
}
</script>

<style lang="scss" scoped>
	.w-100 {
		float: none;
		text-align: left;
	}
  h2{
    margin-top: 2rem; 
  }

  .preview-upload {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .preview-container{
    max-width: 700px;
    margin: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    line-height: 1.6;

    img {
      margin-bottom: 3rem;
    }  
  }

  .is-error-image {
      border: 1px solid #F56C6C;
      width: 360px;
      border-radius: 3px;

    .el-upload {
    }

  }


  .preview-text {
    text-align: left;
    width: 100%;
  }
</style>