import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from 'api';

import recipeActions from 'store/recipe/actions';

import _ from 'lodash';
import RecipeInfo from './RecipeInfo';
import RecipeContent from './RecipeContent';
import RecipeSteps from './RecipeSteps';
import StyledComponent from './StyledComponent';

const {
  setIsLoadingRecipeData,
  setRecipeData,
} = recipeActions;

const RecipePage = () => {
  const dispatch = useDispatch();

  const { recipeData } = useSelector((state) => state.recipe);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(setIsLoadingRecipeData(true));

    api.get('get-recipe-by-id', { id: recipeId })
      .then((res) => {
        dispatch(setRecipeData(res));
      })
      .finally(() => {
        dispatch(setIsLoadingRecipeData(false));
      });
  }, []);

  if (_.isEmpty(recipeData)) return null;

  return (
    <StyledComponent>
      <div className="info-block">
        <RecipeInfo />
      </div>
      <div className="content-block">
        <RecipeContent />
      </div>
      <div className="steps-block">
        <RecipeSteps />
      </div>
    </StyledComponent>
  );
};

export default RecipePage;
