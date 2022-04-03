const page = 'RECIPE_';

const actions = {
  SET_IS_LOADING_RECIPE_DATA: `${page}SET_IS_LOADING_RECIPE_DATA`,
  SET_RECIPE_DATA: `${page}SET_RECIPE_DATA`,

  setIsLoadingRecipeData: (isLoading) => ({
    type: actions.SET_IS_LOADING_RECIPE_DATA,
    payload: isLoading,
  }),

  setRecipeData: (data) => ({
    type: actions.SET_RECIPE_DATA,
    payload: data,
  }),
};

export default actions;
