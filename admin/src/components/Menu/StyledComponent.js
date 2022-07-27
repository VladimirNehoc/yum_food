import styled from 'styled-components';

export default styled.div`
  padding-bottom: 20px;
  position: sticky;
  top: 20px;

  a {
    color: ${(props) => props.theme.textColor};
  }

  .header {
    display: flex;
    justify-content: end;
    margin-bottom: 10px;
  }

  .menu-items {
  display: flex;
  flex-direction: column;

    &_item {
      padding: 10px 15px;
      margin: 0 -6px 3px -6px;
      background-color: ${(props) => props.theme.bgCardColor};
      border-radius: ${(props) => props.theme.borderRadiusS};
      transition: .1s;

      &.active {
        background-color: ${(props) => props.theme.bgColorActive};

        &:hover {
          background-color: ${(props) => props.theme.bgColorActive};
        }
      }

      &:hover {
        background-color: ${(props) => props.theme.bgColorActive};
      }
    }
  }
`;
