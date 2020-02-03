import { ActionType } from '../constants';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_POSTS:
      return [...action.payload];

    case ActionType.CREATE_POST:
      return [...state, action.payload];

    case ActionType.DELETE_POST:
      return state.filter(p => p.id !== action.payload);

    default:
      return state;
  };
};

export default postsReducer;