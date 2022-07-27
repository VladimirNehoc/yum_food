import styled from 'styled-components';

export default styled.div`
  border-radius: ${(props) => props.theme.borderRadiusM};
  background-color: ${(props) => props.theme.bgCardColor};
  box-shadow: ${(props) => props.theme.containerBlockShadow};
  padding: ${(props) => props.theme.paddingL};

  .filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 15px;
  }
`;
