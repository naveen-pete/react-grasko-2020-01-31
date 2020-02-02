import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormCreate extends Component {
  handleSubmit = post => {
    delete post.id;
    postService.create(post)
      .then(newPost => {
        console.log('newPost:', newPost);
        this.props.history.push('/posts');
      })
      .catch(error => {
        console.log('Create post failed!');
        console.log('Error:', error);
      });
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormCreate;
