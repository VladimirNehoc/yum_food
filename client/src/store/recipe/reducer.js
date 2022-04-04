import actions from './actions';

export const initialState = {
  isLoadingRecipeData: false,
  recipeData: {},
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_IS_LOADING_RECIPE_DATA:
      return {
        ...state,
        isLoadingRecipeData: payload,
      };
    case actions.SET_RECIPE_DATA:
      return {
        ...state,
        recipeData: payload,
      };
    default:
      return state;
  }
};

export default reducer;
