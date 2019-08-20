<template>
</template>

<script>
export default {

  name: 'logout',
  layout: 'empty',
  beforeCreate(){
  	this.$store.dispatch('auth/logout');
  	this.$router.push('/admin/login');
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>