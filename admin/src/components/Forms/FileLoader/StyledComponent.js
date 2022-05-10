import styled from 'styled-components';

export default styled.div`
  .title {
    font-size: ${(props) => props.theme.fontSizeS};
    margin-bottom: 5px;
  }

  .upload-container {
    width: ${(props) => props.containerWidth};
    height: ${(props) => props.containerHeight};
    border-radius: ${(props) => props.theme.borderRadiusS};
    background-color: ${(props) => props.theme.inputBgColor};
    overflow: hidden;
    position: relative;

    &.not-valid {
      outline: 1px solid ${(props) => props.theme.notValidColor};
    }

    & .error-message {
      position: absolute;
      text-align: right;
      max-width: 80%;
      top: 5px;
      right: 5px;
      padding: 5px 10px;
      border-radius: ${(props) => props.theme.borderRadiusXS};
      background-color: ${(props) => props.theme.inputBgColor};
      color: ${(props) => props.theme.notValidColor};
      opacity: .9;
    }

    input {
      position: absolute;
      width: 100%;
      height: calc(100% + 100px);
      opacity: 0;
      top: -100px;
      left: 0;
      z-index: 1;
      cursor: pointer;
    }

    .empty {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: calc(${(props) => props.containerWidth} / 6);
        font-weight: 100;
        color: ${(props) => props.theme.inputPlaceholder}
      }
    }

    &.has-file {
      .empty {
        opacity: 0;
        transition: .2s;
        background-color: ${(props) => props.theme.inputBgColor};
      }

      &:hover {
        .empty {
          opacity: .7;
        }
      }
    }

    .file {
      width: 100%;
      height: 100%;

      img {
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
