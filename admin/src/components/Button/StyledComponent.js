import styled from 'styled-components';

export default styled.button`
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => props.theme.borderRadiusXS};
  box-shadow: ${(props) => (props.shadow ? props.theme.buttonBlockShadow : 'none')};
  display: flex;
  align-items: center;
  transition: .1s;

  .loading-container {
    position: relative;
    left: 0px;
    width: 0px;
    opacity: 0;
    transition: .3s;

    &.loading {
      width: 20px;
      opacity: 1;
      left: 10px;
    }
  }

  ${(props) => {
    if (props.size === 's') {
      return `
        padding: ${props.theme.paddingXS} ${props.theme.paddingM};
        font-size: ${props.theme.fontSizeXS};
      `;
    }

    if (props.size === 'm') {
      return `
        padding: ${props.theme.paddingS} ${props.theme.paddingXL};
        font-size: ${props.theme.fontSizeS};
      `;
    }

    if (props.size === 'l') {
      return `
        padding: calc(${props.theme.paddingS} + 2px) calc(${props.theme.paddingXL} + 10px);
        font-size: ${props.theme.fontSizeS};
      `;
    }

    return `
        padding: ${props.theme.paddingXS} ${props.theme.paddingL};
        font-size: ${props.theme.fontSizeS};
      `;
  }}

${(props) => {
    if (props.color === 1) {
      return `
        background-color: ${props.theme.bgColor1};
        &:hover {
          background-color: ${props.theme.bgColorHover1};
        }
      `;
    }

    if (props.color === 2) {
      return `
        background-color: ${props.theme.bgColor2};
        &:hover {
          background-color: ${props.theme.bgColorHover2};
        }
      `;
    }

    if (props.color === 3) {
      return `
        background-color: ${props.theme.bgColor3};
        &:hover {
          background-color: ${props.theme.bgColorHover3};
        }
      `;
    }

    if (props.color === 4) {
      return `
        background-color: ${props.theme.bgColor4};
        color: #222;
        &:hover {
          background-color: ${props.theme.bgColorHover4};
        }
      `;
    }

    return `
        background-color: ${props.theme.bgColorButton};
        &:hover {
          background-color: ${props.theme.bgColorHoverButton};
        }
      `;
  }}
`;
