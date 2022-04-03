import actions from './actions';

const appInitialState = {
  theme: 'light',
  units: [],
};

const reducer = (state = appInitialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case actions.SET_UNITS:
      return {
        ...state,
        units: payload,
      };
    default:
      return state;
  }
};

export default reducer;
