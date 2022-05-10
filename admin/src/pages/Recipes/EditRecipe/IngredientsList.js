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
                    >
                      <IngredientBlock
                        onChange={(data) => onChange(ingredient.id, data)}
                        data={ingredient}
                        errors={errors.ingredients[ingredient.id]}
                        dragHandleProps={providedInner.dragHandleProps}
                      />
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
