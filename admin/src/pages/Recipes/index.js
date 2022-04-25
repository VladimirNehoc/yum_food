import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import api from 'api';

import mainActions from 'store/recipes/actions';

import Main from './Main';
import EditRecipe from './EditRecipe';
import RecipeView from './RecipeView';

import StyledComponent from './StyledComponent';

const {
  setItems,
  setIsLoadingItems,
} = mainActions;

const RecipePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoadingItems(true));

    api.get('recipes')
      .then((res) => {
        dispatch(setItems(res.data));
      })
      .finally(() => {
        dispatch(setIsLoadingItems(false));
      });
  }, []);

  return (
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
};

export default RecipePage;
