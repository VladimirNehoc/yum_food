import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import ContainerBlock from 'containers/ContainerBlock';

import getDeclination from 'helpers/getDeclination';

const RecipeInfo = () => {
  const dispatch = useDispatch();

  const { itemData } = useSelector((state) => state.recipes);
  const { units } = useSelector((state) => state.app);

  const {
    requiredTime,
    ingredients,
  } = itemData;

  return (
    <ContainerBlock>
      <div className="head">
        <div className="head_time">
          <span>30 мин</span>
        </div>

        <div className="head_add">
          <span>Добавить</span>
        </div>
      </div>

      <div className="title">
        <div className="title_text">
          <span>Ингредиенты</span>
        </div>
        <div className="title_portions">
          <span>4 порции</span>
        </div>
      </div>

      <div className="ingredients">
        {
          _.map(ingredients, (ingredient) => {
            const { unitId, count } = ingredient.recipesIngredients;
            const unit = _.get(units, `[${unitId}]`, {});

            const unitString = unit.fullPreference
              ? getDeclination(count, unit.variants)
              : `${count} ${unit.name}`;

            return (
              <div className="ingredients_item" key={ingredient.id}>
                <div className="ingredients_item_name">
                  <span>{ingredient.name}</span>
                </div>
                <div className="ingredients_item_line" />
                <div className="ingredients_item_count">
                  <span>{unitString}</span>
                </div>
              </div>
            );
          })
      }
      </div>
    </ContainerBlock>
  );
};

export default RecipeInfo;
