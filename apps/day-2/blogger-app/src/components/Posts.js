import React from 'react';

import PostDetail from './PostDetail';

const posts = [
  {
    id: 1,
    title: 'My post 1',
    body: 'My post 1 body',
    author: 'author 1',
    category: 'react'
  },
  {
    id: 2,
    title: 'My post 2',
    body: 'My post 2 body',
    author: 'author 2',
    category: 'redux'
  },
  {
    id: 3,
    title: 'My post 3',
    body: 'My post 3 body',
    author: 'author 3',
    category: 'node'
  }
];

const Posts = () => {
  return (
    <div>
      <h4>Posts</h4>
      <hr />

      {posts.map(p => <PostDetail
        key={p.id}
        post={p}
      />)}

    </div>
  );
};

export default Posts;
