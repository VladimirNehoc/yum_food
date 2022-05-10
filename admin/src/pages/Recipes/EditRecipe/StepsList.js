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
                    >
                      <StepBlock
                        onChange={(data) => dispatch(setEditSteps(step.id, data))}
                        data={step}
                        errors={errors.steps[step.id]}
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
