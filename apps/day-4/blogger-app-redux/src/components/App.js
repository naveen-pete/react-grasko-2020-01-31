import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Home from './Home';
import Posts from './Posts';
import PostDetail from './PostDetail';
import PostFormCreate from './PostFormCreate';
import PostFormUpdate from './PostFormUpdate';
import { initGetCategories } from '../actions/categories';

class App extends Component {
  componentDidMount() {
    this.props.dispatchGetCategories();
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/create" component={PostFormCreate} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route path="/posts/:id/edit" component={PostFormUpdate} />
        </Switch>
      </div>
    );
  }
}

// const App = () => {
// };

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetCategories: () => dispatch(initGetCategories())
  };
};

export default connect(null, mapDispatchToProps)(App);
