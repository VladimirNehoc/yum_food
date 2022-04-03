import React from 'react';

import ContainerBlock from 'containers/ContainerBlock';

const RecipeInfo = () => {
  const x = 1;

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
        <div className="ingredients_item">
          <div className="ingredients_item_name">
            <span>Спагетти</span>
          </div>
          <div className="ingredients_item_line" />
          <div className="ingredients_item_count">
            <span>250 г</span>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
};

export default RecipeInfo;
