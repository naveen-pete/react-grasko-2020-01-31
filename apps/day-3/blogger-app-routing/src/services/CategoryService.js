import { categories } from '../data/store';

class CategoryService {
  getAll() {
    return categories;
  }

  get(id) {
    const category = categories.find(c => c.id === id);
    return category;

    // return categories.find(c => c.id === id);
  }
}

export default new CategoryService();