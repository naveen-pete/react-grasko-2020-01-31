import React, { Component } from 'react';

import Categories from './Categories';

import { categoryAll } from '../constants';
import postService from '../services/PostService';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: categoryAll,
      posts: []
    };

    this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  componentDidMount() {
    const posts = postService.getAll();
    this.setState({ posts });
  }

  handleCategorySelect(category) {
    this.setState({ selectedCategory: category });
  }

  deletePost(id) {
    if (window.confirm('Are you sure?')) {
      postService.delete(id);
      this.setState((prevState) => {
        const updatedPosts = prevState.posts.filter(p => p.id !== id);
        return {
          posts: updatedPosts
        };
      });
    }
  }

  renderPosts(posts) {
    return <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          posts.map(p => <tr key={p.id}>
            <td>{p.title}</td>
            <td>{p.author}</td>
            <td>{p.category}</td>
            <td>
              <div className="btn-group btn-group-sm">
                <a className="btn btn-info" href="/">View </a>
                <a className="btn btn-warning" href="/">Edit</a>
                <button className="btn btn-danger" onClick={() => this.deletePost(p.id)}>Delete</button>
              </div>
            </td>
          </tr>)
        }
      </tbody>
    </table>
  }

  render() {
    const selectedCategory = this.state.selectedCategory;
    const posts = this.state.posts;

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
            ? this.renderPosts(filteredPosts)
            : <div className="alert alert-info">No posts for this category.</div>
          }
        </div>
      </div>
    );
  }

}

export default Posts;
