import styled from 'styled-components';

export default styled.div`
  position: relative;

  .title {
    font-size: ${(props) => props.theme.fontSizeS};
    margin-bottom: 5px;
  }

  & > input {
    width: 100%;
    border: none;
    padding: 0 20px 0 10px;
    box-sizing: border-box;

    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${(props) => props.theme.fontWeight};
    font-size: ${(props) => props.theme.fontSizeS};
    border-radius: ${(props) => props.theme.borderRadiusXS};
    height: ${(props) => props.theme.inputHeight};
    background-color: ${(props) => props.theme.inputBgColor};
    color: ${(props) => props.theme.textColor};
    
    &::placeholder {
      color: ${(props) => props.theme.inputPlaceholder};
    }

    &.not-valid {
      outline: 1px solid ${(props) => props.theme.notValidColor};
    }
  }

  & .error-message {
    position: absolute;
    color: ${(props) => props.theme.notValidColor};
    font-size: ${(props) => props.theme.fontSizeS};
    top: ${(props) => (props.errorInside ? 'calc(100% - 1.2em)' : 'calc(100% + 3px)')};
    right: 5px;
  }

  & .clear-button {
    position: absolute;
    bottom: calc((${(props) => props.theme.inputHeight} / 2) - 5px);
    right: 10px;
    width: 12px;
    height: 12px;

    & > svg {
      width: 100%;
      height: 100%;
      fill: ${(props) => props.theme.inputPlaceholder};
    }
  }
`;
