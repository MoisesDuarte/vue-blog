<template>
  <b-container fluid>  
    <b-card v-for="blog in blogs" :key="blog.id" :title="blog.title" :sub-title="blog.author" class="mt-3 mb-3">
      <b-card-text>
        <p><b-badge v-for="category in blog.categories" :key='category' pill variant="primary">{{category}}</b-badge></p>
        <p>{{blog.content}}</p>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      blogs: []
    }
  },
  created() {
    this.Axios.get('http://localhost:3000/posts')
    .catch(err => {
      console.log(err);
    })
    .then(response => {
      console.log(response);
      this.blogs = response.data.slice(0, 5);
    })
  }
}
</script>
