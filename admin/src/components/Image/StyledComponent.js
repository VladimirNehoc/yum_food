import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;

  & img {
    display: block;
    width: 100%;
    max-width: 100%;
  }

  & div {
    height: 100%;
    width: 100%;
    background-image: url(${(props) => props.src});
    background-position: center center;
    background-size: cover;
  }
`;
