<template>
	<el-form :model="commentForm" :rules="rules" ref="commentForm" label-width="120px" class="demo-commentForm">
	  <el-form-item label="Your name" prop="name">
	    <el-input v-model="commentForm.name"></el-input>
	  </el-form-item>

	  <el-form-item label="Message" prop="desc">
	    <el-input type="textarea" v-model="commentForm.desc"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button :loading="loading" type="primary" @click.prevent="submitForm('commentForm')">Create</el-button>
	    <el-button :loading="loading" @click="resetForm('commentForm')">Reset</el-button>
	  </el-form-item>
	</el-form>
</template>
<script>
  export default {
  	name: 'CommentForm',
    data() {
      return {
      	loading: false,
        commentForm: {
          name: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input your name', trigger: 'blur' },
            { min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'blur' }
          ],
         
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	this.loading = true;

          	const data = {
          		name: this.commentForm.name,
          		comment: this.commentForm.desc,
          	}
          	setTimeout( () => {
          		this.$emit('created', data);
          		this.loading = false;
          		this.$message.success('Comment has been added')
          	}, 1000)

          } 

        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="css" scoped>
</style>