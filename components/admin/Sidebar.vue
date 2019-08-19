<template>
	<el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      router
      @open=""
      @close="">
      <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
        <span>Analytics</span>
      </el-menu-item>
      <el-menu-item index="/admin/create">
        <i class="el-icon-menu"></i>
        <span>Create</span>
      </el-menu-item>
      <el-menu-item index="/admin/list">
        <i class="el-icon-menu"></i>
        <span>Posts</span>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i class="el-icon-menu"></i>
        <span>Users</span>
      </el-menu-item>
      <el-menu-item index="/admin/logout">
        <i class="el-icon-menu"></i>
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