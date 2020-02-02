import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostForm from './PostForm';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/create" component={PostForm} />
    </div>
  );
};

export default App;
