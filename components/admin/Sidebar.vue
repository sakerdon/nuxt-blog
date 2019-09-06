<template>
	<el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      @open=""
      @close="">
      <el-menu-item index="/admin">
        <i class="el-icon-plus"></i>
        <span>Create post</span>
      </el-menu-item>
      <el-menu-item index="/admin/list">
        <i class="el-icon-menu"></i>
        <span>Posts list</span>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i class="el-icon-user"></i>
        <span>Add user</span>
      </el-menu-item>
      <el-menu-item index="/admin/logout">
        <i class="el-icon-right"></i>
        <span>Log out</span>
      </el-menu-item>
    </el-menu>

</template>

<script>
export default {

  name: 'sidebar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.el-menu {
	height: 100%;
}
</style>