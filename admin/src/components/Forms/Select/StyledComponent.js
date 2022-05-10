import styled from 'styled-components';

export default styled.div`
position: relative;
  .title {
    font-size: ${(props) => props.theme.fontSizeS};
    margin-bottom: 5px;
  }

  & .error-message {
    position: absolute;
    color: ${(props) => props.theme.notValidColor};
    font-size: ${(props) => props.theme.fontSizeS};
    top: calc(100% + 3px);
    right: 5px;
  }
`;
