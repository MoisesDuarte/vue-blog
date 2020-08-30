<template> 
    <div id="BlogPostList">
        <b-card v-for="blog in blogs" :key="blog.id" :title="blog.title" :sub-title="blog.author" class="mt-3 mb-3">
            <b-card-text>
                <p><b-badge v-for="category in blog.categories" :key='category' pill variant="primary">{{category}}</b-badge></p>
                <p>{{blog.content}}</p>
            </b-card-text>
            <b-button v-on:click.prevent="deletePost(blog.id)" variant="outline-danger" class="float-right"><b-icon-trash/> Delete</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: []
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
      getPosts : function() {
        this.Axios.get('http://localhost:3000/posts')
        .catch(err => {
            console.log(err);
        })
        .then(response => {
            console.log(response);
            this.blogs = response.data.slice(0, 5);
        })
      },
      deletePost : function(blogId) {
          this.Axios.delete(`http://localhost:3000/posts/${blogId}`)
          .catch(err => {
              console.log(err);
          })
          .then(response => {
              console.log(response.data);

              // Removing from local array
              var removeIndex = this.blogs.map(function(item) { return item.id }).indexOf(blogId);
              this.blogs.splice(removeIndex, 1);
          })
      }
  }
}    
</script>

<style>

</style>