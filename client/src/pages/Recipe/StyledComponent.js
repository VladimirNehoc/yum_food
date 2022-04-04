import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-areas: 'info content'
                        'info steps';
  grid-gap: 15px;
  grid-template-columns: 300px 1fr;

  .info-block {
    grid-area: info;

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
      margin-bottom: 12px;
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
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 15px;
        padding: 0 50px;

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
  }
`;
