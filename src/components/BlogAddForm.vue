<template>
    <b-container fluid class="mt-4">   
        <!-- BLOG POSTING FORM -->
        <h2 class="lead text-center">Add a New Blog Post</h2>
        <b-form v-if="!submitted"> 
            <!-- Title -->
            <b-form-group label="Blog Title:" label-for="blog-title">
                <b-form-input id="blog-title" v-model="blog.title" :state="titleState" lazy required></b-form-input>
            </b-form-group>
            <!-- Author -->
            <b-form-group label="Author:">
                <b-form-select v-model="blog.selectedAuthor" :options="authors"></b-form-select>
            </b-form-group>
            <!-- Category -->
            <b-form-group label="Categories:">
                <b-form-checkbox-group id="blog-category" v-model="blog.selectedCategories" :options="categories"></b-form-checkbox-group>
            </b-form-group>
            <!-- Content -->
            <b-form-group label="Blog Content:" label-for="blog-content">
                <b-form-textarea id="blog-content" size="sm" v-model="blog.content" lazy required></b-form-textarea>
            </b-form-group>
            <!-- Submit Button -->
            <b-button class="mr-2" variant="success" v-on:click.prevent="submitPost">Submit</b-button>
            <b-button type="reset" variant="danger" v-on:click.prevent="resetPost">Reset</b-button>
        </b-form>

        <!-- REQUEST SUCCESS ALERT -->
        <b-alert v-if="submitted" show variant="success">Blog posted sucessfully!</b-alert>

        <!-- PREVIEW CARD -->
        <b-card class="mt-3" header="Blog Preview" :title="blog.title" :subTitle="blog.selectedAuthor">
            <b-card-text>
                <p><b-badge pill variant="primary" v-for="category in blog.selectedCategories" :key="category">{{ category }}</b-badge></p>
                <p>{{ blog.content }}</p>
            </b-card-text>
        </b-card>
    </b-container>
</template>

<script>
export default {
    computed: {
        titleState() {
            return this.blog.title.length > 2 ? true : false;
        },
    },
    data() {
        return {
            blog: {
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
        submitPost : function() {
            // TODO: Should validate the form first here (maybe an future dependency)

            this.Axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.blog.title,
                body: this.blog.content,
                userId: 1
            })
            .catch((err) => {
                console.log(err);
            })
            .then(response => {
                console.log(response);
                this.submitted = true;
            })
        },
        resetPost : function() {

            this.blog.title = '';
            this.blog.selectedAuthor = null;
            this.blog.selectedCategories = [];
            this.blog.content = '';
        }
    }
}
</script>

<style>
    /*  */
</style>