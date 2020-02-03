import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import { initCreatePost } from '../actions/posts';

class PostFormCreate extends Component {
  handleSubmit = post => {
    delete post.id;
    this.props.dispatchCreatePost(post)
      .then(() => this.props.history.push('/posts'));
  }

  render() {
    return <PostForm
      operation="Create"
      onSubmit={this.handleSubmit}
    />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchCreatePost: post => dispatch(initCreatePost(post))
  };
};

export default connect(null, mapDispatchToProps)(PostFormCreate);
