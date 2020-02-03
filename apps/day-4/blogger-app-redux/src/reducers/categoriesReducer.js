import { ActionType } from '../constants';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_CATEGORIES:
      return [...action.payload];

    default:
      return state;
  }
};

export default categoriesReducer;
