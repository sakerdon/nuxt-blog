<template>
  <el-row type="flex" justify="center">
    <el-col :lg="10">
      <app-post 
        v-for="post in 3"
        :text="post"
        :key="post"
        >
        
      </app-post>
    </el-col>
  </el-row>
</template>

<script>
import AppPost from '~/components/main/Post.vue'

export default {
  components: {
    AppPost
  }
}
</script>

<style>

</style>
