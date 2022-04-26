import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Main from './Main';
import EditRecipe from './EditRecipe';
import RecipeView from './RecipeView';

import StyledComponent from './StyledComponent';

const RecipePage = () => (
  <StyledComponent>
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />

      <Route
        path="/edit"
        element={<EditRecipe />}
      />

      <Route
        path="/edit/:recipeId"
        element={<EditRecipe />}
      />

      <Route
        path="/edit/:recipeId/view"
        element={<RecipeView />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </StyledComponent>
);

export default RecipePage;
