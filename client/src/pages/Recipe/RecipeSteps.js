import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import ContainerBlock from 'containers/ContainerBlock';

const RecipeSteps = () => {
  const { recipeData } = useSelector((state) => state.recipe);

  const {
    steps,
  } = recipeData;

  return (
    <div className="steps">
      {
        _.map(steps, (step) => {
          const x = 1;

          return (
            <div className="step-block" key={step.id}>
              <ContainerBlock>
                <div className="step-content">
                  <div className="step-image" />

                  <div className="step-description">
                    <span>{step.content}</span>
                  </div>

                  <div className="step-order">
                    <span>{step.order}</span>
                  </div>
                </div>
              </ContainerBlock>
            </div>
          );
        })
      }
    </div>
  );
};

export default RecipeSteps;
