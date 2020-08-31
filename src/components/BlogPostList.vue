<template> 
    <div id="BlogPostList">
        <b-card v-for="post in posts" 
          :key="post.id" 
          :title="post.title" 
          :sub-title="post.author" 
          class="mt-3 mb-3"
        >
            <b-card-text>
                <p><b-badge v-for="category in post.categories" :key='category' pill variant="primary" class="mr-1">{{category}}</b-badge></p>
                <p>{{post.content}}</p>
            </b-card-text>
            <b-button v-on:click.prevent="deletePost(post.id)" variant="outline-danger" class="float-right"><b-icon-trash /> Delete</b-button>
        </b-card>
    </div>
</template>

<script>
import PostService from '../PostService';

export default {
  data() {
    return {
      posts: [],
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
}    
</script>

<style>

</style>