import React, { Component } from 'react';

import PostForm from './PostForm';
import postService from '../services/PostService';

class PostFormUpdate extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    postService.get(id)
      .then(post => this.setState({ post }))
      .catch(error => {
        console.log('Get post failed.');
        console.log('Error:', error);
      });
  }

  handleSubmit = post => {
    postService.update(post)
      .then(() => this.props.history.push('/posts'))
      .catch(error => {
        console.log('Update post failed.');
        console.log('Error:', error);
      });
  }

  render() {
    return <PostForm
      operation="Update"
      post={this.state.post}
      onSubmit={this.handleSubmit}
    />;
  }
}

export default PostFormUpdate;
