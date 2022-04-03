import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from 'api';
import mainActions from 'store/main/actions';
import Main from './Main';
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
      <Main />
    </StyledComponent>
  );
};

export default RecipePage;
