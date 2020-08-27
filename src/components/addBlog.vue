<template>
    <b-container fluid class="mt-4">   
        <!-- Blog Posting Form -->
        <h2 class="lead text-center">Add a New Blog Post</h2>
        <b-form v-if="!blog.submitted"> 
            <!-- Title -->
            <b-form-group label="Blog Title:" label-for="blog-title">
                <b-form-input id="blog-title" v-model="blog.title" :state="titleState" lazy required></b-form-input>
            </b-form-group>
            <!-- Content -->
            <b-form-group label="Blog Content:" label-for="blog-content">
                <b-form-textarea id="blog-content" size="sm" v-model="blog.content" :state="contentState" lazy required></b-form-textarea>
            </b-form-group>
            <!-- Category -->
            <b-form-group label="Categories:">
                <b-form-checkbox-group id="blog-category" v-model="blog.selectedCategories" :options="blog.categories"></b-form-checkbox-group>
            </b-form-group>
            <!-- Author -->
            <b-form-group label="Author:">
                <b-form-select v-model="blog.selectedAuthor" :options="blog.authors"></b-form-select>
            </b-form-group>
            <!-- Submit Button -->
            <b-button block variant="success" v-on:click.prevent="submitPost">Add Blog</b-button>
        </b-form>

        <!-- Add Request Success Alert -->
        <b-alert v-if="blog.submitted" show variant="success">Blog posted sucessfully!</b-alert>

        <!-- Blog Posting Preview -->
        <b-card class="mt-3" header="Blog Preview" :title="blog.title" :subTitle="blog.selectedAuthor">
            <b-card-text>
                <p><b-badge pill variant="primary" v-for="category in blog.selectedCategories" :key="category">{{ category }}</b-badge></p>
                <p>{{ blog.content }}</p>
            </b-card-text>
        </b-card>
    </b-container>
</template>

<script>
import Axios from 'axios';

export default {
    computed: {
        titleState() {
            return this.blog.title.length > 2 ? true : false;
        },
        contentState() {
            return this.blog.content.length > 2 ? true : false;
        }
    },
    data() {
        return {
            blog: {
                title: '',
                content: '',
                selectedCategories: [],
                selectedAuthor: null,
                categories: [
                    { text: 'Urban', value: 'urban' },
                    { text: 'Pastoral', value: 'pastoral' },
                    { text: 'Horror', value: 'horror' },
                    { text: 'Thriller', value: 'thriller' },
                    { text: 'Magical-Realism', value: 'mg-realism' },
                ],
                authors: [
                    { value: null, text: 'Please select an option' },
                    { value: "M. Duarte", text: 'Moisés Duarte' },
                    { value: "I. Lafayette", text: 'Ilia Lafayette' },
                    { value: "Anon", text: 'Anonymous' },
                ],
                submitted: false,
            }
        }
    },
    methods: {
        submitPost : function() {
            Axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            })
            .catch((err) => {
                console.log(err);
            })
            .then(response => {
                console.log(response);
                this.blog.submitted = true;
            })
        }
    }
}
</script>

<style>
    /*  */
</style>