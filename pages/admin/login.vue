<template>
	<el-card :style="{width: '320px'}">
		<h1>Login</h1>
		<el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-loginForm">
		  <el-form-item label="E-mail" prop="email" type="email">
		    <el-input v-model="loginForm.name"></el-input>
		  </el-form-item>

		  <el-form-item label="Password" prop="password">
		    <el-input v-model="loginForm.password" type="password"></el-input>
		  </el-form-item>

		  
		  <el-form-item>
		    <el-button :loading="loading" type="primary" @click.prevent="submitForm('loginForm')">Login</el-button>
		  </el-form-item>
		</el-form>
	</el-card>
</template>

<script>
export default {

  name: 'login',
  layout: 'empty',

  data() {
    return {
    	loading: false,
      loginForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: 'Please input correct e-mail', trigger: 'change' },
          { min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'change' }
        ],
       
        
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
        	this.loading = true;

        	const data = {
        		name: this.loginForm.name,
        		password: this.loginForm.password,
        	}


        	await this.$store.dispatch('auth/login', data);
    		this.$router.push('/admin')
    		// this.$message.success('you are logged in')


        } 

      });
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>

