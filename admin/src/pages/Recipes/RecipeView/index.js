import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from 'api';

import recipesActions from 'store/recipes/actions';

import _ from 'lodash';
import RecipeInfo from './RecipeInfo';
import RecipeContent from './RecipeContent';
import RecipeSteps from './RecipeSteps';
import StyledComponent from './StyledComponent';

const {
  setIsLoadingItemData,
  setItemData,
} = recipesActions;

const RecipePage = () => {
  const dispatch = useDispatch();

  const { itemData } = useSelector((state) => state.recipes);

  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(setIsLoadingItemData(true));

    api.get('get-recipe-by-id', { id: recipeId })
      .then((res) => {
        dispatch(setItemData(res));
      })
      .finally(() => {
        dispatch(setIsLoadingItemData(false));
      });
  }, []);

  if (_.isEmpty(itemData)) return null;

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
