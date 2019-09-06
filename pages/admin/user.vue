<template>
	<div class="user">
		<h2>Create user</h2>
		<el-form :model="userForm" :rules="rules" ref="userForm" class="demo-userForm">
		  <el-form-item label="E-mail" prop="email" type="email">
		    <el-input v-model="userForm.name"></el-input>
		  </el-form-item>

		  <el-form-item label="Password" prop="password">
		    <el-input v-model="userForm.password" type="password"></el-input>
		  </el-form-item>

		  
		  <el-form-item>
		    <el-button :loading="loading" type="primary" 
		    @click.prevent="submitForm('userForm')">Create</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {

  head() {
    return {
      title: process.env.appName + ':: Create user'
    }

  },

  name: 'user',
  layout: 'admin',
  middleware: ['admin-auth'],

   data() {
    return {
    	loading: false,
      userForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input correct e-mail', trigger: 'change' },
          { min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'change' }
        ],
       
        
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
        	this.loading = true;

        	const data = {
        		login: this.userForm.name,
        		password: this.userForm.password,
        	}
        	await this.$store.dispatch('auth/createUser', data);
    		this.$message.success('User was created')
        	this.loading = false;
        	this.userForm.name = '';
        	this.userForm.password = '';




        } 

      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>