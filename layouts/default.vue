<template>
  <el-container>
    <el-header>
      <app-navigation></app-navigation>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer class="footer" align="center">&copy; BestBlog, {{new Date().getFullYear()}}</el-footer>
  </el-container>

</template>

<script>
  import AppNavigation from "~/components/main/Navigation";

  export default {
    components: {
      AppNavigation
    }
  }
</script>

<style scoped>
  .footer {

  }
</style>
