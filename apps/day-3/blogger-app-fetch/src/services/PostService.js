import { posts } from '../data/store';

const apiUrl = 'http://localhost:3001/posts';

class PostService {
  getAll() {
    return fetch(apiUrl)
      .then((response) => {
        return response.json();
      });
  }

  get(id) {
    const post = posts.find(p => p.id === id);
    return post;
  }

  create(post) {
    return fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  update(post) {
    const postToUpdate = posts.find(p => p.id === post.id);

    if (postToUpdate) {
      postToUpdate.title = post.title;
      postToUpdate.body = post.body;
      postToUpdate.author = post.author;
      postToUpdate.category = post.category;
    }

    return postToUpdate;
  }

  delete(id) {
    const index = posts.findIndex(p => p.id === id);
    posts.splice(index, 1);
  }
}

const instance = new PostService();
export default instance;