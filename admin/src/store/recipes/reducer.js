import _ from 'lodash';
import actions from './actions';

export const initialState = {
  isLoadingItems: false,
  isLoadingItemData: false,
  items: [],
  itemData: null,
  editItem: {
    name: '',
    description: '',
    calories: '0',
    proteins: '0',
    carbohydrates: '0',
    fats: '0',
    ingredients: [],
    image: null,
  },
  page: 1,
  itemsPerPage: 10,
  total: 0,
  filters: {},
  errors: {},
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_IS_LOADING_ITEM_DATA:
      return {
        ...state,
        isLoadingItemData: payload,
      };
    case actions.SET_IS_LOADING_ITEMS:
      return {
        ...state,
        isLoadingRecipeData: payload,
      };
    case actions.SET_ITEM_DATA:
      return {
        ...state,
        itemData: payload,
      };
    case actions.SET_ITEMS:
      return {
        ...state,
        items: payload.items,
        total: payload.total,
      };
    case actions.SET_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    case actions.RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters,
      };
    case actions.SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case actions.SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: payload,
      };
    case actions.SET_EDIT_DATA: {
      const updatedErrors = { ...state.errors };

      _.forEach(_.keys(payload), (key) => {
        delete updatedErrors[key];
      });

      return {
        ...state,
        editItem: {
          ...state.editItem,
          ...payload,
        },
        errors: updatedErrors,
      };
    }
    case actions.SET_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
