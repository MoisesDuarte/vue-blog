<template>
    <b-container fluid class="mt-4">   
        <!-- Blog Posting Form -->
        <h2 class="lead text-center">Add a New Blog Post</h2>
        <b-form> 
            <!-- Title -->
            <b-form-group label="Blog Title:" label-for="blog-title">
                <b-form-input id="blog-title" v-model="blog.title" :state="titleState" lazy required></b-form-input>
            </b-form-group>
            <!-- Content -->
            <b-form-group label="Blog Content:" label-for="blog-content">
                <b-form-textarea id="blog-content" size="sm" v-model="blog.content" lazy></b-form-textarea>
            </b-form-group>
            <!-- Category -->
            <b-form-group label="Categories:">
                <b-form-checkbox-group id="blog-category" v-model="blog.selectedCategories" :options="blog.categories"></b-form-checkbox-group>
            </b-form-group>

        </b-form>

        <!-- Blog Posting Preview -->
        <b-card header="Blog Preview" :title="blog.title" :subTitle="blog.selectedCategories.join(', ')">
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
                    title: '',
                    content: '',
                    selectedCategories: [],
                    categories: [
                        { text: 'Urban', value: 'urban' },
                        { text: 'Pastoral', value: 'pastoral' },
                        { text: 'Horror', value: 'horror' },
                        { text: 'Thriller', value: 'thriller' },
                        { text: 'Magical-Realism', value: 'mg-realism' },
                    ]
                }
            }
        }
    }
</script>

<style>
    /*  */
</style>