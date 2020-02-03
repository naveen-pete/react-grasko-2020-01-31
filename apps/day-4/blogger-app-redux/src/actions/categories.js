import { ActionType } from '../constants';

import categoryService from '../services/CategoryService';

export const initGetCategories = () => {
  return (dispatch) => {
    return categoryService.getAll()
      .then(categories => {
        dispatch(getCategories(categories))
      })
      .catch(error => {
        console.log('Get categories failed.');
        console.log('Error:', error);
      });
  }
};

const getCategories = (categories) => {
  return {
    type: ActionType.GET_CATEGORIES,
    payload: categories
  };
};

