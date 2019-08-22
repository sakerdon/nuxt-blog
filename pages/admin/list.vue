<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column prop="title" label="Post">
    </el-table-column>
    <el-table-column label="Date">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="views">
      <template slot-scope="scope">
        <i class="el-icon-view"></i>
        <span>{{ scope.row.views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="comments">
      <template slot-scope="scope">
        <i class="el-icon-eye"></i>
        <span>{{ scope.row.comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template slot-scope="{row}">
        <el-button size="mini" @click="open(row._id)">Edit</el-button>
        <el-button size="mini" type="danger" @click="remove(row._id)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {

  name: 'list',
  layout: 'admin',
  middleware: ['admin-auth'],

  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdminPosts');
    return { 
    	posts 
    }
  },
  methods: {
  	open(id) {
  		this.$router.push(`/admin/post/${id}`)
  	},
  	remove(id) {
  		this.$confirm(`Delete post ${id}?`, 'Are you sure?', {
  			confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
  		}).then(() => {
  		  this.$store.dispatch('post/removePost', id);
  		  this.posts = this.posts.filter(p => p._id !== id)
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        })
  		
  	},
  }
}

</script>
<style lang="css" scoped>
</style>
