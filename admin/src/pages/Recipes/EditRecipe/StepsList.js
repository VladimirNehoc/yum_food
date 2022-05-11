/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import _ from 'lodash';

import recipesActions from 'store/recipes/actions';

import Button from 'components/Button';
import StepBlock from './StepBlock';

const {
  setEditSteps,
  addStep,
  reorderSteps,
  removeStep,
} = recipesActions;

const StepsList = () => {
  const dispatch = useDispatch();

  const {
    editItem,
    errors,
  } = useSelector((state) => state.recipes);

  const {
    steps,
  } = editItem;

  const onDragEnd = (result) => {
    const {
      source,
      destination,
    } = result;

    dispatch(reorderSteps(source.index, destination.index));
  };

  const handleRemoveItem = (id, e) => {
    const item = e.target.closest('.step-item_container');

    if (item) {
      const height = item.offsetHeight;

      item.style.opacity = '1';
      item.style.height = `${height}px`;
      item.style.transition = 'all .2s';
      item.style.opacity = '0';
      item.style.marginBottom = `${-(height)}px`;

      setTimeout(() => {
        dispatch(removeStep(id));
      }, 300);
    }
  };

  return (
    <div className="steps-container">
      <div className="mt-30">
        <h3>Шаги приготовления</h3>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="steps-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {_.map(steps, (step, index) => (
                <Draggable key={step.id} draggableId={step.id} index={index}>
                  {(providedInner) => (
                    <div
                      ref={providedInner.innerRef}
                      {...providedInner.draggableProps}
                      className="step-item_container"
                    >
                      <StepBlock
                        onChange={(data) => dispatch(setEditSteps(step.id, data))}
                        data={step}
                        errors={errors.steps[step.id]}
                        dragHandleProps={providedInner.dragHandleProps}
                      />

                      {
                        steps.length > 1 && (
                          <div
                            className="remove-button"
                            role="button"
                            tabIndex={0}
                            onClick={(e) => handleRemoveItem(step.id, e)}
                            onKeyPress={(e) => handleRemoveItem(step.id, e)}
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
          className="add-step"
          onClick={() => dispatch(addStep())}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default StepsList;
