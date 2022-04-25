import styled from 'styled-components';

export default styled.div`
  .recipe-card {
    height: 140px;
    overflow: hidden;
    display: grid;
    grid-template-areas: 'image head'
                          'image content';
    grid-template-columns: 200px 1fr;
    grid-template-rows: auto 1fr;
    grid-gap: 20px;

    &_image {
      grid-area: image;
      height: 140px;
      border-radius: ${(props) => props.theme.borderRadiusXS};
      overflow: hidden;
    }

    &_head {
      grid-area: head;
      font-size: ${(props) => props.theme.fontSizeL};
    }

    &_content {
      grid-area: content;
    }
  }
`;
