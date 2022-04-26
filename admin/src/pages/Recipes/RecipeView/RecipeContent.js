import React from 'react';
import { useSelector } from 'react-redux';

import ContainerBlock from 'containers/ContainerBlock';
import Image from 'components/Image';

const RecipeContent = () => {
  const { itemData } = useSelector((state) => state.recipes);

  return (
    <ContainerBlock>
      <div className="title">
        <span>{itemData.name}</span>
      </div>

      <div className="image">
        <Image path={itemData.image?.path} />
      </div>

      <div className="info">
        <div className="info_title">
          <span>Энергетическая ценность на порцию</span>
        </div>
        <div className="info_items">
          <div className="info_items_item">
            <div><span>Калорийность</span></div>
            <div><span>{itemData.calories}</span></div>
            <div><span>ККАЛ</span></div>
          </div>
          <div className="info_items_item">
            <div><span>Белки</span></div>
            <div><span>{itemData.proteins}</span></div>
            <div><span>ГРАММ</span></div>
          </div>
          <div className="info_items_item">
            <div><span>Жиры</span></div>
            <div><span>{itemData.fats}</span></div>
            <div><span>ГРАММ</span></div>
          </div>
          <div className="info_items_item">
            <div><span>Углеводы</span></div>
            <div><span>{itemData.carbohydrates}</span></div>
            <div><span>ГРАММ</span></div>
          </div>
        </div>
      </div>

      <div className="description">
        <p>{itemData.description}</p>
      </div>
    </ContainerBlock>
  );
};

export default RecipeContent;
