import { ActionType } from '../constants';

import postService from '../services/PostService';

export const initGetPosts = () => {
  return dispatch => {
    return postService.getAll()
      .then(posts => dispatch(getPosts(posts)))
      .catch(error => {
        console.log('Get posts failed.');
        console.log('Error:', error);
      });
  };
};

const getPosts = posts => {
  return {
    type: ActionType.GET_POSTS,
    payload: posts
  };
};

export const initCreatePost = post => {
  return dispatch => {
    return postService.create(post)
      .then(newPost => dispatch(createPost(newPost)))
      .catch(error => {
        console.log('Create post failed.');
        console.log('Error:', error);
      });
  };
};

const createPost = post => {
  return {
    type: ActionType.CREATE_POST,
    payload: post
  };
};

export const initDeletePost = id => {
  return dispatch => {
    return postService.delete(id)
      .then(() => dispatch(deletePost(id)))
      .catch(error => {
        console.log('Delete post failed.');
        console.log('Error:', error);
      });
  };
};

const deletePost = id => {
  return {
    type: ActionType.DELETE_POST,
    payload: id
  };
};
