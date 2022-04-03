import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  box-shadow: ${(props) => props.theme.containerBlockShadow};
  border-radius: ${(props) => props.theme.borderRadiusM};
  padding: ${(props) => `${props.theme.paddingL} ${props.theme.paddingXL}`};
  box-sizing: border-box;
  background-color: ${(props) => props.theme.bgCardColor};
  color: ${(props) => props.theme.textColor};
`;
