<template> 
    <div id="BlogPostList">
        <div v-if="loading" class="text-center mt-4"><b-spinner variant="primary" label="Spinning"></b-spinner></div>

        <b-card v-for="blog in blogs" :key="blog.id" :title="blog.title" :sub-title="blog.author" class="mt-3 mb-3">
            <b-card-text>
                <p><b-badge v-for="category in blog.categories" :key='category' pill variant="primary" class="mr-1">{{category}}</b-badge></p>
                <p>{{blog.content}}</p>
            </b-card-text>
            <b-button v-on:click.prevent="deletePost(blog.id)" variant="outline-danger" class="float-right"><b-spinner v-if="deleting" small label="Small Spinner"></b-spinner><b-icon-trash v-if="!deleting" /> Delete</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      loading: true,
      deleting: false,
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
      getPosts : function() {
        this.Axios.get('https://my-json-server.typicode.com/MoisesDuarte/vue-blog/posts?_page=1&_limit=5')
        .catch(err => {
            console.log(err);
        })
        .then(response => {
            console.log(response);
            this.blogs = response.data;
            this.loading = false;
        })
      },
      deletePost : function(blogId) {
          this.deleting = true;
          this.Axios.delete(`https://my-json-server.typicode.com/MoisesDuarte/vue-blog/posts/${blogId}`)
          .catch(err => {
              console.log(err);
          })
          .then(response => {
              console.log(response.data);

              // Removing from local array
              var removeIndex = this.blogs.map(function(item) { return item.id }).indexOf(blogId);
              this.blogs.splice(removeIndex, 1);

              this.deleting = false;
          })
      }
  }
}    
</script>

<style>

</style>