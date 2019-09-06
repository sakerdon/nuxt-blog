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

  head() {
    return {
      title: process.env.appName + ':: Login'
    }

  },

  name: 'login',
  layout: 'empty',

  data() {
    return {
    	loading: false,
      loginForm: {
        name: 'admin',
        password: '123456'
      },
      rules: {
        name: [
          { required: true, message: 'Please input correct e-mail', trigger: 'change' },
          { min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'change' }
        ],
       
        
      }
    };
  },
  mounted() {
    const {message} = this.$route.query;

    switch(message) {
       case 'login':
         this.$message.info('Before you must log in')
         break;
       case 'logout':
         this.$message.success('You are logged out')
         break;
       case 'session':
         this.$message.warning('Session the end. Please, log in')

         
     } 
  }, 
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {

        	this.loading = true;
        	const data = {
        		login: this.loginForm.name,
        		password: this.loginForm.password,
        	}

          try {
        	   await this.$store.dispatch('auth/login', data);
    		      this.$router.push('/admin')
          } catch{
              this.loading = false;
          }



    		// this.$message.success('you are logged in')


        } 

      });
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>

