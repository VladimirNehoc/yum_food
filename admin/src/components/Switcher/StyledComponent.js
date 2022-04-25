import styled from 'styled-components';

export default styled.div`
  height: 24px;
  width: 42px;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme.inputBgColor};
  display: flex;
  align-items: center;
  position: relative;
  padding: 3px;
  box-sizing: border-box;

  & .circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #999;
    position: absolute;
    transition: .1s cubic-bezier(0.72, 0.02, 0.67, 0.44);
    left: ${(props) => (props.isActive ? 'calc(100% - 3px - 18px)' : '3px')};
  }
`;
