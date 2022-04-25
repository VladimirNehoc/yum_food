import { combineReducers } from 'redux';

import app from './app/reducer';
import recipes from './recipes/reducer';

export default combineReducers({
  app,
  recipes,
});
