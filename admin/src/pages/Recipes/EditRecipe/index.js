import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api from 'api';

import _ from 'lodash';

import recipesActions from 'store/recipes/actions';

import Button from 'components/Button';
import InputText from 'components/Forms/InputText';
import InputNumber from 'components/Forms/InputNumber';
import InputTextarea from 'components/Forms/InputTextarea';
import Select from 'components/Forms/Select';
import FileLoader from 'components/Forms/FileLoader';

import ContainerBlock from 'containers/ContainerBlock';

import checkValidation from 'helpers/validation';

import StyledComponent from './StyledComponent';

import fields from './fields';

const {
  setIsLoadingItemData,
  setItemData,
  setEditData,
  setErrors,
} = recipesActions;

const RecipePage = () => {
  const dispatch = useDispatch();

  const {
    editItem,
    errors,
  } = useSelector((state) => state.recipes);

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

  const setField = (field, value) => {
    dispatch(setEditData({ [field]: value }));
  };

  const submit = () => {
    const checkErrors = checkValidation(editItem, fields);

    if (checkErrors) {
      dispatch(setErrors(checkErrors));
    }
  };

  if (_.isEmpty(editItem)) return null;

  return (
    <StyledComponent>
      <ContainerBlock>
        <InputText
          title="Название"
          value={editItem.name}
          onChange={(val) => setField('name', val)}
          required={fields.name.required}
          error={errors.name}
        />

        <InputTextarea
          title="Описание"
          value={editItem.description}
          onChange={(val) => setField('description', val)}
          required={fields.description.required}
          error={errors.description}
        />

        <FileLoader
          title="Изображение"
          required={fields.image.required}
          value={editItem.image}
          onChange={(file) => setField('image', file)}
          width={400}
          error={errors.image}
        />

        {/* <Select
          title="Ингредиенты"
          value={editItem.ingredient}
          apiUrl="ingredients"
          onChange={(value) => setField('ingredient', value)}
        /> */}

        {/* <h3>Энергетическая ценность</h3>

        <div className="ingredients-block">
          {
            _.map(editItem.ingredients, ingredientItem => (
              <div className="ingredients-block_ingredient-item">
                <Select
                  value={ingredientItem.value}
                />
              </div>
            ))
          }
        </div> */}

        <h3>Энергетическая ценность</h3>

        <div className="energy-block">
          <InputNumber
            title="Калории"
            value={editItem.calories}
            onChange={(val) => setField('calories', val)}
            required={fields.calories.required}
            error={errors.calories}
            min="0"
          />

          <InputNumber
            title="Белки"
            value={editItem.proteins}
            onChange={(val) => setField('proteins', val)}
            required={fields.proteins.required}
            error={errors.proteins}
          />

          <InputNumber
            title="Жиры"
            value={editItem.fats}
            onChange={(val) => setField('fats', val)}
            required={fields.fats.required}
            error={errors.fats}
          />

          <InputNumber
            title="Углеводы"
            value={editItem.carbohydrates}
            onChange={(val) => setField('carbohydrates', val)}
            required={fields.carbohydrates.required}
            error={errors.carbohydrates}
          />
        </div>

        <Button
          className="mt-10"
          onClick={submit}
          color={4}
        >
          Создать
        </Button>
      </ContainerBlock>
    </StyledComponent>
  );
};

export default RecipePage;
