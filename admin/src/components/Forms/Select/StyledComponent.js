import styled from 'styled-components';

export default styled.div`
position: relative;
  padding-bottom: 15px;

  .title {
    font-size: ${(props) => props.theme.fontSizeS};
    margin-bottom: 5px;
  }

  & #react-select {
    width: 100%;

    min-height: ${(props) => props.theme.inputHeight};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: ${(props) => props.theme.fontWeight};
    font-size: ${(props) => props.theme.fontSizeS};
    
    & .react-select__control {
      border: none;
      box-shadow: none;
      border-radius: ${(props) => props.theme.borderRadiusXS};
      background-color: ${(props) => props.theme.inputBgColor};
    }

    & .react-select__indicator {
      color: ${(props) => props.theme.inputPlaceholder};
    }

    & .react-select__indicator-separator {
      background-color: ${(props) => props.theme.inputPlaceholder};
    }

    & .react-select__input-container {
      color: ${(props) => props.theme.textColor};
    }

    & .react-select__input::placeholder {
      color: red;
    }

    & .react-select__menu {
      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.inputBgColor};
    }

    & .react-select__multi-value {
      background-color: ${(props) => (props.theme.status === 'dark' ? props.theme.bgColorDefault : '#bbb')};
      
      &__label {
        color: ${(props) => props.theme.textColor};
      }
    }

    & .react-select__option {
      transition: .1s;

      &:hover {
        background-color: ${(props) => (props.theme.status === 'dark' ? props.theme.bgColorActive : '#bbb')};
      }

      &--is-focused {
        background-color: ${(props) => (props.theme.status === 'dark' ? props.theme.bgColorActive : '#bbb')};
      }
    }
  }

  & .error-message {
    position: absolute;
    color: ${(props) => props.theme.notValidColor};
    font-size: ${(props) => props.theme.fontSizeS};
    top: calc(100% - 17px);
    right: 5px;
  }
`;
