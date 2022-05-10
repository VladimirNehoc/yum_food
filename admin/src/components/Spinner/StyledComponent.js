import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .spinner {
    display: inline-block;
    position: relative;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
  }

  .spinner div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => `calc(${props.size} * 0.8)`};
    height: ${(props) => `calc(${props.size} * 0.8)`};
    margin: ${(props) => `calc(${props.size} * 0.1)`};
    border: ${(props) => `calc(${props.size} * 0.1) solid #fff`};
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => (`${props.color || props.theme.textColor} transparent transparent transparent`)};
  }

  .spinner div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .spinner div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .spinner div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
