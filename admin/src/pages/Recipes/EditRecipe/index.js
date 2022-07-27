/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import api, { postFile } from 'api';
import _ from 'lodash';
import { toast } from 'react-toastify';

import recipesActions from 'store/recipes/actions';

import Button from 'components/Button';
import InputText from 'components/Forms/InputText';
import InputTextarea from 'components/Forms/InputTextarea';
import InputNumber from 'components/Forms/InputNumber';
import FileLoader from 'components/Forms/FileLoader';
import Select from 'components/Forms/Select';
import SkeletonBlock from 'components/SkeletonBlock';

import ContainerBlock from 'containers/ContainerBlock';

import checkValidation from 'helpers/validation';

import StyledComponent from './StyledComponent';
import StepsList from './StepsList';
import IngredientsList from './IngredientsList';

import fields, { stepFields, ingredientFields } from './fields';

const {
  setIsLoadingItemData,
  setRecipeDataFromApi,
  setEditData,
  setEditSteps,
  setErrors,
} = recipesActions;

const getModifiedRecipe = (data) => {
  const recipe = { ...data };
  const ingredients = [];

  _.forEach(recipe.ingredients, (ingredient) => {
    const ingredientId = ingredient.id;
    const unitId = ingredient.recipesIngredients?.unitId;
    const count = ingredient.recipesIngredients?.count;

    ingredients.push({
      id: String(ingredientId) + String(unitId),
      ingredientId,
      unitId,
      count,
      fromApi: true,
    });
  });

  _.forEach(recipe.steps, (step, index) => {
    recipe.steps[index].fromApi = true;
  });

  recipe.ingredients = ingredients;

  return recipe;
};

const RecipePage = () => {
  const [isSaving, setIsSaving] = useState();
  const dispatch = useDispatch();

  const {
    isLoadingItemData,
    editItem,
    errors,
  } = useSelector((state) => state.recipes);

  const { recipeId } = useParams();

  const isNewRecipe = !editItem.id;

  useEffect(() => {
    if (!isNewRecipe) {
      dispatch(setIsLoadingItemData(true));

      api.service('get-recipe-by-id').get(recipeId)
        .then((res) => {
          if (_.isEmpty(res)) {
            throw Error('Рецепт не найден');
          }

          const recipe = getModifiedRecipe(res);

          dispatch(setRecipeDataFromApi(recipe));
        })
        .catch((err) => {
          toast(err.message, { type: 'error' });
        })
        .finally(() => {
          dispatch(setIsLoadingItemData(false));
        });
    } else {
      dispatch(setIsLoadingItemData(false));
    }

    return () => {
      dispatch(setIsLoadingItemData(true));
    };
  }, []);

  const setField = (field, value) => {
    dispatch(setEditData({ [field]: value }));
  };

  const submit = () => {
    const checkErrors = checkValidation(editItem, fields);

    const stepsErrors = {};

    _.forEach(editItem.steps, (step) => {
      const stepErrors = checkValidation(step, stepFields);
      if (!_.isEmpty(stepErrors)) {
        stepsErrors[step.id] = stepErrors;
      }
    });

    const ingredientsErrors = {};

    _.forEach(editItem.ingredients, (ingredient) => {
      const ingredientErrors = checkValidation(ingredient, ingredientFields);
      if (!_.isEmpty(ingredientErrors)) {
        ingredientsErrors[ingredient.id] = ingredientErrors;
      }
    });

    if (!_.isEmpty(checkErrors) || !_.isEmpty(stepsErrors) || !_.isEmpty(ingredientsErrors)) {
      const allErrors = {
        ...checkErrors,
        steps: { ...stepsErrors },
        ingredients: { ...ingredientsErrors },
      };

      dispatch(setErrors(allErrors));
      toast('Заполните необходимые поля', { type: 'error' });

      return;
    }

    setIsSaving(true);

    const recipeImage = editItem.image;
    const stepsImages = _.map(editItem.steps, (step) => step.image);

    const images = [recipeImage, ...stepsImages];

    Promise.all(_.map(images, (image) => {
      if (!(image instanceof File)) {
        return image.id;
      }

      const formData = new FormData();
      formData.append('file', image);

      return postFile('image-upload', formData)
        .then((res) => res)
        .catch((error) => {
          toast(error.message, { type: 'error' });
        });
    })).then((res) => {
      const [recipeImageId, ...stepsImageIds] = _.map(res, (item) => item.id);

      const data = {
        ...editItem,
        imageId: recipeImageId,
      };

      _.forEach(data.steps, (step, index) => {
        data.steps[index].imageId = stepsImageIds[index];
        data.steps[index].order = index;
      });

      _.forEach(data.ingredients, (ingredient, index) => {
        data.ingredients[index].order = index;
      });

      api.service('update-recipe').create(data)
        .then((result) => {
          if (result) {
            // Обновляем данные о картинках
            dispatch(setEditData({
              image: result.image,
            }));

            _.forEach(result.steps, (step) => {
              dispatch(setEditSteps(step.id, { image: step.image }));
            });

            if (isNewRecipe) {
              toast('Изменения успешно сохранены', { type: 'success', autoClose: 2000 });
            } else {
              toast('Рецепт успешно создан', { type: 'success', autoClose: 2000 });
            }
          }
        })
        .catch((error) => {
          toast(error.message, { type: 'error' });
        })
        .finally(() => {
          setIsSaving(false);
        });
    });
  };

  if (isLoadingItemData) {
    return (
      <ContainerBlock>
        <SkeletonBlock height="500px" />
      </ContainerBlock>
    );
  }

  return (
    <StyledComponent>
      <ContainerBlock>
        <h2 className="mt-5">
          { isNewRecipe ? 'Новый рецепт' : 'Редактирование рецепта' }
        </h2>

        {
          !isNewRecipe && (
            <span className="item-id">{editItem.id}</span>
          )
        }

        <InputText
          title="Название"
          value={editItem.name}
          onChange={(val) => setField('name', val)}
          required={fields.name.required}
          error={errors.name}
        />

        <InputTextarea
          className="mt-15"
          title="Описание"
          value={editItem.description}
          onChange={(val) => setField('description', val)}
          required={fields.description.required}
          error={errors.description}
          rows={10}
        />

        <FileLoader
          className="mt-15"
          title="Изображение"
          required={fields.image.required}
          value={editItem.image}
          onChange={(file) => setField('image', file)}
          width={400}
          error={errors.image}
        />

        <div className="difficult-block">
          <Select
            title="Группа"
            required
            sort={{ name: 1 }}
            className="mt-15"
            value={editItem.recipesGroupId}
            apiUrl="recipes-groups"
            placeholder="Выберите группу"
            onChange={(id) => setField('recipesGroupId', id)}
            error={errors.recipesGroupId}
          />

          <Select
            title="Сложность"
            required
            sort={{ order: 1 }}
            className="mt-15"
            value={editItem.difficultId}
            apiUrl="difficulties"
            placeholder="Выберите сложность"
            onChange={(id) => setField('difficultId', id)}
            error={errors.difficultId}
          />
        </div>

        <div className="mt-30">
          <h3>Энергетическая ценность</h3>
        </div>

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

        <IngredientsList />

        <StepsList />

        <Button
          className="mt-30"
          onClick={submit}
          color={4}
          spinnerColor="#222"
          isLoading={isSaving}
        >
          {isNewRecipe ? 'Создать' : 'Сохранить'}
        </Button>

      </ContainerBlock>
    </StyledComponent>
  );
};

export default RecipePage;
