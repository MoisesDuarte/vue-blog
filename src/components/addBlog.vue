<template>
    <b-container fluid class="mt-4">   
        <!-- Blog Posting Form -->
        <h2>Add a New Blog Post</h2>
        <b-form> 
            <!-- Title -->
            <b-form-group label="Blog Title:" label-for="blog-title">
                <b-form-input id="blog-title" v-model="blog.title" :state="titleState" lazy required></b-form-input>
            </b-form-group>
            <!-- Content -->
            <b-form-group label="Blog Content:" label-for="blog-content">
                <b-form-textarea id="blog-content" size="sm" v-model="blog.content" lazy></b-form-textarea>
            </b-form-group>
        </b-form>

        <!-- Blog Posting Preview -->
        <b-card header="Blog Preview" :title="blog.title">
            <b-card-text>{{ blog.content }}</b-card-text>
        </b-card>
    </b-container>
</template>

<script>
    export default {
        computed: {
            titleState() {
                return this.blog.title.length > 2 ? true : false;
            }
        },
        data() {
            return {
                blog: {
                    title: "",
                    content: ""
                }
            }
        }
    }
</script>