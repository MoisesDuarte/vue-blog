<template>
  <b-container fluid>  
    <b-card title="Blog Title" sub-title="Blog Author" class="mt-3">
      <b-card-text>
        <p><b-badge pill variant="primary">Category</b-badge></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum tellus sed tellus luctus ullamcorper. Nam ut condimentum arcu, vitae accumsan erat. Maecenas ullamcorper magna eget ante tristique fringilla. Proin sit amet enim et nisi rutrum elementum. Duis felis orci, imperdiet a consectetur et, sollicitudin et lorem. Integer mauris mi, ultrices ac congue at, molestie ut risus. Ut pellentesque leo justo, vitae ultrices risus ultricies a. Ut ante mauris, laoreet id auctor pulvinar, lobortis vel lorem. Aenean tincidunt et justo non fringilla. Vivamus quis pretium dui, et vulputate enim. Suspendisse vehicula auctor maximus. </p>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  created() {
    this.Axios.get('http://localhost:3000/posts')
    .catch(err => {
      console.log(err);
    })
    .then(response => {
      console.log(response);
    })
  }
}
</script>
