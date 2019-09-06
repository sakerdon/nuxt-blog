<template>

  <div class="container">
    <el-row :gutter="20" type="flex" align="center">
      <el-col :span="12">
        <div class="header">
          <h1>Just blog</h1>
          <p >This blog built with Nuxt.js for training</p>
        </div>
      </el-col>
      <el-col :span="12">
        <app-post 
          :post="posts[0]"
          height="300px"
          >
                  
        </app-post>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col 
        :span="8" 
        v-for="(post, i) in posts"
        v-if="i > 0"
        :key="post._id"
      >
        <app-post 
          :post="post"
          >
          
        </app-post>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AppPost from '~/components/main/Post.vue'

export default {
  head: {
    title: process.env.appName + ':: Главная'
  },
  components: {
    AppPost
  },
  async asyncData({store}) {
    const posts  = await store.dispatch('post/fetchPosts');
    return {posts};
  }


}
</script>

<style scoped lang="scss">
.container {
  max-width: 1170px;
  margin: 0 auto;
}
.header {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 60px;
    margin-bottom: 14px;
    font-weight: 800;
  }
}



</style>
