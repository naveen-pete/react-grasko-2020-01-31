import { categories } from '../data/store';

const apiUrl = 'http://localhost:3001/categories';

class CategoryService {
  getAll() {
    return fetch(apiUrl)
      .then(response => response.json());
  }

  get(id) {
    const category = categories.find(c => c.id === id);
    return category;

    // return categories.find(c => c.id === id);
  }
}

export default new CategoryService();