import { combineReducers } from 'redux';

import categoriesReducer from './categoriesReducer';
import postsReducer from './postsReducer';

const appReducers = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer
});

export default appReducers;
