<template>
  <div class="wrapper">
    <el-container>
      <el-aside width="200px">
        <app-sidebar></app-sidebar>
      </el-aside>

      <el-container>
        <el-header>
          <app-navigation></app-navigation>
        </el-header>  
        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import AppSidebar from '@/components/admin/Sidebar';
import AppNavigation from "~/components/main/Navigation";


export default {
  components: {
    AppSidebar,
    AppNavigation
  },

  name: 'admin',

  data() {
    return {

    }
  },
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(value) {
      this.$message.error(value.response.data.message)
    }
  }
}

</script>
<style lang="css" scoped>
.wrapper {
  height: 100vh;
}

.el-container {
  height: 100%;
}

</style>
