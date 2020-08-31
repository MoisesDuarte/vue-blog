<template>
    <b-container fluid class="mt-4">   
        <h2 class="lead text-center">Add a New Blog Post</h2>

        <b-form-group label="Blog Title:" label-for="blog-title">
            <b-form-input id="blog-title" v-model="post.title" :state="titleState" lazy required></b-form-input>
        </b-form-group>

        <b-form-group label="Author:">
            <b-form-select v-model="post.selectedAuthor" :options="authors"></b-form-select>
        </b-form-group>

        <b-form-group label="Categories:">
            <b-form-checkbox-group id="post-category" v-model="post.selectedCategories" :options="categories"></b-form-checkbox-group>
        </b-form-group>

        <b-form-group label="Blog Content:" label-for="blog-content">
            <b-form-textarea id="blog-content" size="sm" v-model="post.content" lazy required></b-form-textarea>
        </b-form-group>

        <b-button class="mr-2" variant="success" v-on:click="createPost">Submit</b-button>
        <b-button type="reset" variant="danger" v-on:click.prevent="resetPost">Reset</b-button>

        <b-alert v-if="submitted" show variant="success">Blog posted sucessfully!</b-alert>
    </b-container>
</template>

<script>
import PostService from '../PostService'

export default {
    computed: {
        titleState() {
            return this.post.title.length > 2 ? true : false;
        },
    },
    data() {
        return {
            post: {
                title: '',
                selectedAuthor: null,   
                selectedCategories: [],
                content: '',              
            },
            categories: ['Urban', 'Pastoral', 'Horror', 'Thriller', 'Magical-Realism'],
            authors: ['Moisés Duarte', 'Ilia Lafayette', 'Anonymous'],
            submitted: false,
        }
    },
    methods: {
        async createPost() {
            let data = {
                title: this.post.title,
                author: this.post.selectedAuthor,
                categories: this.post.selectedCategories,
                content: this.post.content
            }

            await PostService.insertPost(data);
            this.posts = await PostService.getPosts();
        },
        resetPost : function() {
            this.post.title = '';
            this.post.selectedAuthor = null;
            this.post.selectedCategories = [];
            this.post.content = '';
        }
    }
}
</script>

<style>
    /*  */
</style>