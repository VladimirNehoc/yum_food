import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-areas: 'info content'
                        'info steps';
  grid-gap: 15px;
  grid-template-columns: 300px 1fr;

  .info-block {
    grid-area: info;
    align-self: auto;
    height: fit-content;
    position: sticky;
    top: 15px;
    display: flex;
    flex-direction: column;

    .head {
      display: flex;
      justify-content: space-between;

      &_time {
        
      }

      &_add {
        text-transform: uppercase;
      }
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      &_text {
        font-size: ${(props) => props.theme.fontSizeM};
      }

      &_portions {

      }
    }

    .ingredients {
      &_item {
        display: flex;
        align-items: center;
        margin-top: 8px;

        &_name {
          
        }

        &_line {
          height: 1px;
          border-top: 1px solid ${(props) => props.theme.textColor};
          flex-grow: 1;
          margin: 0 10px;
          opacity: .3;
          position: relative;
          top: 1px;
        }

        &_count {

        }
      }
    }
  }

  .content-block {
    grid-area: content;

    & .title {
      text-transform: uppercase;
      font-size: ${(props) => props.theme.fontSizeM};
      text-align: center;
      margin-bottom: 15px;
    }

    & .image {
      margin: 0 -20px 10px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    & .info {
      margin-bottom: 25px;

      &_title {
        text-align: center;
        font-size: ${(props) => props.theme.fontSizeM};
        margin-bottom: 15px;
      }

      &_items {
        display: grid;
        grid-template-columns: repeat(4, 20%);
        grid-gap: 15px;
        justify-content: center;

        &_item {
          border-radius: ${(props) => props.theme.borderRadiusS};
          font-size: ${(props) => props.theme.fontSizeXS};
          border: 0.5px solid ${(props) => props.theme.borderColor};
          padding: 7px 20px;
          display: flex;
          align-items: center;
          flex-direction: column;

          & > *:first-child {
            text-transform: uppercase;
            font-weight: 300;
            margin-bottom: 10px;
          }

          & > *:nth-child(2) {
            font-weight: 500;
          }

          & > *:last-child {
            text-transform: uppercase;
            font-weight: 300;
          }
        }
      }
    }

    & .description {
      p {
        text-indent: 25px;
        text-align: justify;
      }
    }
  }

  .steps-block {
    grid-area: steps;

    & .steps {
      display: flex;
      flex-direction: column;

      & .step-block {
        margin-bottom: 15px;
        position: relative;

        & .step-content {
          display: grid;
          grid-template-areas: 'image description';
          grid-gap: 15px;
          grid-template-columns: minmax(200px, 40%) 1fr;

          & .step-image {
            grid-area: image;
            min-height: 200px;
            margin-top: 5px;
            margin-bottom: 5px;
            background-color: gray;
            border-radius: ${(props) => props.theme.borderRadiusS};
          }

          & .step-description {
            grid-area: description;
            font-size: ${(props) => props.theme.fontSizeS};
            text-indent: 25px;
            text-align: justify;
          }

          & .step-order {
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${(props) => props.theme.bgCardColor};
            width: calc(${(props) => props.theme.paddingXL} * 2);
            height: calc(${(props) => props.theme.paddingXL} * 2);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: ${(props) => props.theme.fontSizeL};
            font-weight: 300;
          }
        }
      }
    }
  }
`;
