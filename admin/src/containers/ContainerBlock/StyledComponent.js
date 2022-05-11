import styled from 'styled-components';

export default styled.div`
  animation: view .2s;
  width: 100%;
  height: 100%;
  box-shadow: ${(props) => (props.shadow ? props.theme.containerBlockShadow : 'none')};
  border-radius: ${(props) => props.theme.borderRadiusM};
  padding: ${(props) => props.padding || `${props.theme.paddingL} ${props.theme.paddingXL}`};
  box-sizing: border-box;
  background-color: ${
  (props) => (props.bgColor ? props.theme[props.bgColor] : props.theme.bgCardColor)
};
  color: ${(props) => props.theme.textColor};

  @keyframes view {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
