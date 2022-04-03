import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from 'api';

import recipeActions from 'store/recipe/actions';

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

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(setIsLoadingRecipeData(true));

    api.get('get-recipe-by-id', { id: recipeId })
      .then((res) => {
        console.log(res[0]);
        dispatch(setRecipeData(res[0]));
      })
      .finally(() => {
        dispatch(setIsLoadingRecipeData(false));
      });
  }, []);

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
