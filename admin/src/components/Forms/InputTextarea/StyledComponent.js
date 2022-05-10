import styled from 'styled-components';

export default styled.div`
  position: relative;

  .title {
    font-size: ${(props) => props.theme.fontSizeS};
    margin-bottom: 5px;
  }

  & > textarea {
    width: 100%;
    border: none;
    padding: 6px 10px;
    box-sizing: border-box;
    resize: ${(props) => (props.resize ? 'vertical' : 'none')};

    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${(props) => props.theme.fontWeight};
    height: ${(props) => `${props.rows + 1}em`};
    font-size: ${(props) => props.theme.fontSizeS};
    border-radius: ${(props) => props.theme.borderRadiusXS};
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
    top: ${(props) => (props.errorInside ? 'calc(100% - 1.4em)' : '100%')};
    right: 5px;
  }
`;
