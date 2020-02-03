const apiUrl = 'http://localhost:3001/categories';

class CategoryService {
  getAll() {
    return fetch(apiUrl)
      .then(response => response.json());
  }

  get(id) {
    return fetch(`${apiUrl}/${id}`)
      .then(response => response.json());
  }
}

export default new CategoryService();
