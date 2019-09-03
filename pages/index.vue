<template>
  <el-row type="flex" justify="center">
    <el-col :lg="10">
      <app-post 
        v-for="post in posts"
        :post="post"
        :key="post._id"
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
  },
  async asyncData({store}) {
    const posts  = await store.dispatch('post/fetchPosts');
    return {posts};
  }


}
</script>

<style>

</style>
