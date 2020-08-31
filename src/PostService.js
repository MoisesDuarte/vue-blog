import axios from 'axios';

const url = 'http://localhost:3000/posts/';

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post
                    }))
                );
            })
            .catch((err) => {
                reject(err);
            })
        });
    }

    // Create Post
    static insertPost(data) {
        return axios.post(url, data);
    }    

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService;