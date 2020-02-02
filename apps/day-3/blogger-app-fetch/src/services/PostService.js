const apiUrl = 'http://localhost:3001/posts';

class PostService {
  getAll() {
    return fetch(apiUrl)
      .then(response => response.json());
  }

  get(id) {
    return fetch(`${apiUrl}/${id}`)
      .then(response => response.json());
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
    return fetch(`${apiUrl}/${post.id}`, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }

  delete(id) {
    return fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json());
  }
}

export default new PostService();
