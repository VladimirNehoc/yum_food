import styled from 'styled-components';

export default styled.div`
  .container {
    width: 100%;
    max-width: 1020px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px auto 0;
    display: grid;
    grid-template-areas: 'menu content';
    grid-template-columns: 250px 1fr;
    grid-gap: 15px;

    & .menu {
      grid-area: menu;
    }

    & .content {
      grid-area: content;
    }
  }
`;
