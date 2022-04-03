import { combineReducers } from 'redux';

import app from './app/reducer';
import main from './main/reducer';
import recipe from './recipe/reducer';

export default combineReducers({
  app,
  main,
  recipe,
});
