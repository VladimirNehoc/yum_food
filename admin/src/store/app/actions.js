const page = 'APP_';

const actions = {
  SET_THEME: `${page}SET_THEME`,
  SET_UNITS: `${page}SET_UNITS`,

  setTheme: (theme) => ({
    type: actions.SET_THEME,
    payload: theme,
  }),

  setUnits: (units) => ({
    type: actions.SET_UNITS,
    payload: units,
  }),
};

export default actions;
