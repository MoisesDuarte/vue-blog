<template>
  <b-container fluid>
    <BlogPostList />
  </b-container>
</template>

<script>
import BlogPostList from '../components/BlogPostList.vue';

export default {
  name: 'Home',
  components: {
    BlogPostList
  }
}
</script>
