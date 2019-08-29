<template>
  <div class="wrapper">
    <el-container>
      <el-aside width="200px">
        <app-sidebar></app-sidebar>
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>


<script>
import AppSidebar from '@/components/admin/Sidebar'

export default {
  components: {
    AppSidebar
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
