import actions from './actions';

const savedTheme = localStorage.getItem('theme');

const appInitialState = {
  theme: savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  units: [],
};

const reducer = (state = appInitialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_THEME:
      localStorage.setItem('theme', payload);

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
