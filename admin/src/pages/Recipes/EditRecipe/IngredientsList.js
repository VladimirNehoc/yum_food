/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

import recipesActions from 'store/recipes/actions';

import Button from 'components/Button';
import IngredientBlock from './IngredientBlock';

const {
  setEditIngredients,
  addIngredient,
  reorderIngredients,
  removeIngredient,
} = recipesActions;

const IngredientsList = () => {
  const dispatch = useDispatch();

  const {
    editItem,
    errors,
  } = useSelector((state) => state.recipes);

  const {
    ingredients,
  } = editItem;

  const onDragEnd = (result) => {
    const {
      source,
      destination,
    } = result;

    if (!_.isNil(destination.index) && !_.isNil(source.index)) {
      dispatch(reorderIngredients(source.index, destination.index));
    }
  };

  const onChange = useCallback(
    (ingredientId, data) => {
      dispatch(setEditIngredients(ingredientId, data));
    },
    [ingredients.length],
  );

  const handleRemoveItem = (id, e) => {
    const item = e.target.closest('.ingredient-item_container');

    if (item) {
      const height = item.offsetHeight;

      item.style.opacity = '1';
      item.style.height = `${height}px`;
      item.style.transition = 'all .2s';
      item.style.opacity = '0';
      item.style.marginBottom = `${-(height)}px`;

      setTimeout(() => {
        dispatch(removeIngredient(id));
      }, 300);
    }
  };

  return (
    <div className="ingredients-container">
      <div className="mt-30">
        <h3>Ингредиенты</h3>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="ingredients-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {_.map(ingredients, (ingredient, index) => (
                <Draggable key={ingredient.id} draggableId={ingredient.id} index={index}>
                  {(providedInner) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      className="ingredient-item_container"
                    >
                      <IngredientBlock
                        onChange={(data) => onChange(ingredient.id, data)}
                        data={ingredient}
                        errors={errors.ingredients[ingredient.id]}
                        dragHandleProps={providedInner.dragHandleProps}
                      />

                      {
                        ingredients.length > 1 && (
                          <div
                            className="remove-button"
                            role="button"
                            tabIndex={0}
                            onClick={(e) => handleRemoveItem(ingredient.id, e)}
                            onKeyPress={(e) => handleRemoveItem(ingredient.id, e)}
                          >
                            <span />
                          </div>
                        )
                      }
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="action-block">
        <Button
          className="add-ingredient"
          onClick={() => dispatch(addIngredient())}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default IngredientsList;
