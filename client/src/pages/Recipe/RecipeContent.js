import React from 'react';
import { useSelector } from 'react-redux';

import ContainerBlock from 'containers/ContainerBlock';
import Image from 'components/Image';

const RecipeContent = () => {
  const { recipeData } = useSelector((state) => state.recipe);

  return (
    <ContainerBlock>
      <div className="title">
        <span>{recipeData.name}</span>
      </div>

      <div className="image">
        <Image path={recipeData.image?.path} />
      </div>

      <div className="info">
        <div className="info_title">
          <span>Энергетическая ценность на порцию</span>
        </div>
        <div className="info_items">
          <div className="info_items_item">
            <div><span>Калорийность</span></div>
            <div><span>{recipeData.calories}</span></div>
            <div><span>ККАЛ</span></div>
          </div>
          <div className="info_items_item">
            <div><span>Белки</span></div>
            <div><span>{recipeData.proteins}</span></div>
            <div><span>ГРАММ</span></div>
          </div>
          <div className="info_items_item">
            <div><span>Жиры</span></div>
            <div><span>{recipeData.fats}</span></div>
            <div><span>ГРАММ</span></div>
          </div>
          <div className="info_items_item">
            <div><span>Углеводы</span></div>
            <div><span>{recipeData.carbohydrates}</span></div>
            <div><span>ГРАММ</span></div>
          </div>
        </div>
      </div>

      <div className="description">
        <p>{recipeData.description}</p>
      </div>
    </ContainerBlock>
  );
};

export default RecipeContent;
