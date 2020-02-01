import React, { Component } from 'react';

import Categories from './Categories';
import PostDetail from './PostDetail';

import { posts, categoryAll } from '../data/store';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: categoryAll
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  handleCategorySelect(category) {
    this.setState({ selectedCategory: category });
  }

  render() {
    const selectedCategory = this.state.selectedCategory;
    let filteredPosts = [];
    if (selectedCategory.id === 'all') {
      filteredPosts = posts;
    } else {
      filteredPosts = posts.filter(p => p.category === selectedCategory.id);

    }


    return (
      <div className="row">
        <div className="col-3">
          <Categories onCategorySelect={this.handleCategorySelect} />
        </div>

        <div className="col">
          <h4>Posts (Category: {this.state.selectedCategory.name})</h4>
          {filteredPosts.length > 0
            ? filteredPosts.map(p => <PostDetail key={p.id} post={p} />)
            : <div className="alert alert-info">No posts for this category.</div>
          }
        </div>
      </div>
    );
  }

}

export default Posts;
