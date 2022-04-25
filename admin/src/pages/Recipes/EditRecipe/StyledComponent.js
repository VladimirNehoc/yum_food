import styled from 'styled-components';

export default styled.div`
  & .energy-block {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
