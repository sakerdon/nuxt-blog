<template>
  <div>admin.page</div>
</template>
<script>
export default {
  name: 'adminPage',
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {

    }
  }
}

</script>
<style lang="css" scoped>
</style>
