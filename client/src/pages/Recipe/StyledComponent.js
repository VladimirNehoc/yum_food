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
      margin: 15px 0;

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

        &_name {
          
        }

        &_line {
          height: 1px;
          border-top: 1px solid ${(props) => props.theme.textColor};
          flex-grow: 1;
          margin: 0 10px;
          opacity: .4;
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
  }

  .steps-block {
    grid-area: steps;
  }
`;
