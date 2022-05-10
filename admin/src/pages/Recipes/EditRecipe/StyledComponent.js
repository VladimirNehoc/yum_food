import styled from 'styled-components';

export default styled.div`
  & .difficult-block {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  & .energy-block {
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .steps-container {
    .steps-list {
      & > div {
        margin-bottom: 10px;
      }

      .step-item {
        display: grid;
        grid-template-areas: 'move image title'
                              'move image content';
        grid-template-columns: auto 200px 1fr;
        grid-template-rows: auto 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 15px;

        &:not(:first-child) {
          margin-top: 10px;
        }

        .move {
          grid-area: move;
          align-self: center;
          margin-right: -5px;
          width: 24px;
          height: 24px;

          svg {
            fill: ${(props) => props.theme.inputBgColor}
          }
        }

        .image {
          grid-area: image;
        }

        .title {
          grid-area: title;
        }

        .content {
          grid-area: content;

          & > div, & textarea {
            height: 100%;
          }
        }
      }

      .add-step {
        
      }
    }

    .action-block {
      display: flex;
      justify-content: end;
    }
  }

  .ingredients-container {
    .ingredients-list {
      & > div {
        margin-bottom: 10px;
      }

      .ingredient-item {
        display: grid;
        grid-template-areas: 'move ingredient count unit';
        grid-template-columns: auto 1fr 100px 160px;
        grid-template-rows: auto;
        grid-column-gap: 15px;
        grid-row-gap: 15px;

        &:not(:first-child) {
          margin-top: 10px;
        }

        .move {
          grid-area: move;
          align-self: center;
          margin-right: -5px;
          width: 24px;
          height: 24px;

          svg {
            fill: ${(props) => props.theme.inputBgColor}
          }
        }

        .ingredient {
          grid-area: ingredient;
        }

        .count {
          grid-area: count;
        }

        .unit {
          grid-area: unit;
        }
      }

      .add-Ingredient {
        
      }
    }

    .action-block {
      display: flex;
      justify-content: end;
    }
  }
`;
