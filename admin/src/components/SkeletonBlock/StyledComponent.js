import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: ${(props) => props.height};

  .item {
    position: absolute;
    background-color: ${(props) => props.theme.inputPlaceholder};
    border-radius: ${(props) => props.theme.borderRadiusM};
    animation: flashing 1.5s infinite;
  }

  @keyframes flashing {
    0% {
      opacity: .2;
    }

    10% {
      opacity: .2;
    }

    50% {
      opacity: .5;
    }

    90% {
      opacity: .2;
    }

    100% {
      opacity: .2;
    }
  }
`;
