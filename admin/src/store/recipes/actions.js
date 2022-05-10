const module = 'RECIPES_';

const actions = {
  SET_IS_LOADING_ITEM_DATA: `${module}SET_IS_LOADING_ITEM_DATA`,
  SET_IS_LOADING_ITEMS: `${module}SET_IS_LOADING_ITEMS`,
  SET_RECIPE_DATA_FROM_API: `${module}SET_RECIPE_DATA_FROM_API`,
  SET_ITEMS: `${module}SET_ITEMS`,
  SET_FILTERS: `${module}SET_FILTERS`,
  RESET_FILTERS: `${module}RESET_FILTERS`,
  SET_PAGE: `${module}SET_PAGE`,
  SET_ITEMS_PER_PAGE: `${module}SET_ITEMS_PER_PAGE`,
  SET_EDIT_DATA: `${module}SET_EDIT_DATA`,
  SET_EDIT_STEPS: `${module}SET_EDIT_STEPS`,
  SET_EDIT_INGREDIENTS: `${module}SET_EDIT_INGREDIENTS`,
  SET_ERRORS: `${module}SET_ERRORS`,
  ADD_STEP: `${module}ADD_STEP`,
  REMOVE_STEP: `${module}REMOVE_STEP`,
  REORDER_STEPS: `${module}REORDER_STEPS`,
  ADD_INGREDIENT: `${module}ADD_INGREDIENT`,
  REMOVE_INGREDIENT: `${module}REMOVE_INGREDIENT`,
  REORDER_INGREDIENTS: `${module}REORDER_INGREDIENTS`,

  setIsLoadingItemData: (isLoading) => ({
    type: actions.SET_IS_LOADING_ITEM_DATA,
    payload: isLoading,
  }),

  setIsLoadingItems: (isLoading) => ({
    type: actions.SET_IS_LOADING_ITEMS,
    payload: isLoading,
  }),

  setRecipeDataFromApi: (data) => ({
    type: actions.SET_RECIPE_DATA_FROM_API,
    payload: data,
  }),

  setItemData: (data) => ({
    type: actions.SET_ITEM_DATA,
    payload: data,
  }),

  setItems: (items, total) => ({
    type: actions.SET_ITEMS,
    payload: {
      items,
      total,
    },
  }),

  setFilters: (filters) => ({
    type: actions.SET_FILTERS,
    payload: filters,
  }),

  resetFilters: () => ({
    type: actions.SET_FILTERS,
  }),

  setPage: (page) => ({
    type: actions.SET_PAGE,
    payload: page,
  }),

  setItemsPerPage: (itemsPerPage) => ({
    type: actions.SET_ITEMS_PER_PAGE,
    payload: itemsPerPage,
  }),

  setEditData: (data) => ({
    type: actions.SET_EDIT_DATA,
    payload: data,
  }),

  setEditSteps: (id, data) => ({
    type: actions.SET_EDIT_STEPS,
    payload: {
      id,
      data,
    },
  }),

  setEditIngredients: (id, data) => ({
    type: actions.SET_EDIT_INGREDIENTS,
    payload: {
      id,
      data,
    },
  }),

  addStep: () => ({
    type: actions.ADD_STEP,
  }),

  removeStep: (id) => ({
    type: actions.REMOVE_STEP,
    payload: id,
  }),

  reorderSteps: (oldIndex, newIndex) => ({
    type: actions.REORDER_STEPS,
    payload: {
      oldIndex,
      newIndex,
    },
  }),

  addIngredient: () => ({
    type: actions.ADD_INGREDIENT,
  }),

  removeIngredient: (id) => ({
    type: actions.REMOVE_INGREDIENT,
    payload: id,
  }),

  reorderIngredients: (oldIndex, newIndex) => ({
    type: actions.REORDER_INGREDIENTS,
    payload: {
      oldIndex,
      newIndex,
    },
  }),

  setErrors: (data) => ({
    type: actions.SET_ERRORS,
    payload: data,
  }),
};

export default actions;
