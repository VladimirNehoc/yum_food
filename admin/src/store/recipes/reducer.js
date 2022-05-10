import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import reorder from 'helpers/reorder';

import actions from './actions';

export const initialStepItem = {
  image: null,
  title: '',
  content: '',
};

export const initialIngredientItem = {
  ingredientsGroupId: null,
  count: '0',
  unitId: null,
};

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
    image: null,
    recipesGroupId: null,
    difficultId: null,
    steps: [{ id: uuidv4(), ...initialStepItem }],
    ingredients: [{ id: uuidv4(), ...initialIngredientItem }],
  },
  page: 1,
  itemsPerPage: 10,
  total: 0,
  filters: {},
  errors: {
    steps: {},
    ingredients: {},
  },
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
    case actions.SET_RECIPE_DATA_FROM_API:
      return {
        ...state,
        editItem: payload,
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
    case actions.SET_EDIT_STEPS: {
      const stepIndex = _.findIndex(state.editItem.steps, (step) => step.id === payload.id);
      const updatedSteps = [...state.editItem.steps];
      updatedSteps[stepIndex] = { ...updatedSteps[stepIndex], ...payload.data };

      const updatedStepErrors = { ...state.errors.steps[payload.id] };

      _.forEach(_.keys(payload.data), (key) => {
        delete updatedStepErrors[key];
      });

      return {
        ...state,
        editItem: {
          ...state.editItem,
          steps: updatedSteps,
        },
        errors: {
          ...state.errors,
          steps: {
            ...state.errors.steps,
            [payload.id]: updatedStepErrors,
          },
        },
      };
    }
    case actions.SET_EDIT_INGREDIENTS: {
      const ingredientIndex = _.findIndex(
        state.editItem.ingredients,
        (step) => step.id === payload.id,
      );
      const updatedIngredients = [...state.editItem.ingredients];
      updatedIngredients[ingredientIndex] = {
        ...updatedIngredients[ingredientIndex],
        ...payload.data,
      };

      const updatedIngredientErrors = { ...state.errors.ingredients[payload.id] };

      _.forEach(_.keys(payload.data), (key) => {
        delete updatedIngredientErrors[key];
      });

      return {
        ...state,
        editItem: {
          ...state.editItem,
          ingredients: updatedIngredients,
        },
        errors: {
          ...state.errors,
          ingredients: {
            ...state.errors.ingredients,
            [payload.id]: updatedIngredientErrors,
          },
        },
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
    case actions.ADD_STEP: {
      const newSteps = [...state.editItem.steps, { id: uuidv4(), ...initialStepItem }];

      return {
        ...state,
        editItem: {
          ...state.editItem,
          steps: newSteps,
        },
      };
    }
    case actions.REMOVE_STEP: {
      const newSteps = _.remove(state.editItem.steps, (step) => step.id !== payload);
      const updatedErrors = { ...state.errors };

      delete updatedErrors.steps[payload.id];

      return {
        ...state,
        editItem: {
          ...state.editItem,
          steps: newSteps,
        },
        errors: updatedErrors,
      };
    }
    case actions.REORDER_STEPS: {
      const reorderSteps = reorder(state.editItem.steps, payload.oldIndex, payload.newIndex);

      return {
        ...state,
        editItem: {
          ...state.editItem,
          steps: reorderSteps,
        },
      };
    }
    case actions.ADD_INGREDIENT: {
      const newIngrdients = [
        ...state.editItem.ingredients,
        { id: uuidv4(), ...initialIngredientItem },
      ];

      return {
        ...state,
        editItem: {
          ...state.editItem,
          ingredients: newIngrdients,
        },
      };
    }
    case actions.REMOVE_INGREDIENT: {
      const newIngrdients = _.remove(
        state.editItem.ingredients,
        (ingredient) => ingredient.id !== payload,
      );
      const updatedErrors = { ...state.errors };

      delete updatedErrors.ingredients[payload.id];

      return {
        ...state,
        editItem: {
          ...state.editItem,
          ingredients: newIngrdients,
        },
        errors: updatedErrors,
      };
    }
    case actions.REORDER_INGREDIENTS: {
      const reorderIngredients = reorder(
        state.editItem.ingredients,
        payload.oldIndex,
        payload.newIndex,
      );

      return {
        ...state,
        editItem: {
          ...state.editItem,
          ingredients: reorderIngredients,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
