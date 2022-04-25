const module = 'RECIPES_';

const actions = {
  SET_IS_LOADING_ITEM_DATA: `${module}SET_IS_LOADING_ITEM_DATA`,
  SET_IS_LOADING_ITEMS: `${module}SET_IS_LOADING_ITEMS`,
  SET_ITEM_DATA: `${module}SET_ITEM_DATA`,
  SET_ITEMS: `${module}SET_ITEMS`,
  SET_FILTERS: `${module}SET_FILTERS`,
  RESET_FILTERS: `${module}RESET_FILTERS`,
  SET_PAGE: `${module}SET_PAGE`,
  SET_ITEMS_PER_PAGE: `${module}SET_ITEMS_PER_PAGE`,
  SET_EDIT_DATA: `${module}SET_EDIT_DATA`,
  SET_ERRORS: `${module}SET_ERRORS`,

  setIsLoadingItemData: (isLoading) => ({
    type: actions.SET_IS_LOADING_ITEM_DATA,
    payload: isLoading,
  }),

  setIsLoadingItems: (isLoading) => ({
    type: actions.SET_IS_LOADING_ITEMS,
    payload: isLoading,
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

  setErrors: (data) => ({
    type: actions.SET_ERRORS,
    payload: data,
  }),
};

export default actions;
