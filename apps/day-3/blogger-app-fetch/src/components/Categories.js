import React, { Component } from 'react';

import { categoryAll } from '../constants';
import categoryService from '../services/CategoryService';

class Categories extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    categoryService.getAll()
      .then(categories => this.setState({ categories }))
      .catch(error => {
        console.log('Get categories failed.');
        console.log('Error:', error);
      });
  }

  render() {
    const categoriesWithAll = [categoryAll, ...this.state.categories];
    return <div>
      <h4>Categories</h4>
      <div className="list-group">
        {categoriesWithAll.map(c => <button onClick={() => this.props.onCategorySelect(c)} key={c.id} className="list-group-item list-group-item-action">
          {c.name}
        </button>)}
      </div>
    </div>;
  }
}

export default Categories;
