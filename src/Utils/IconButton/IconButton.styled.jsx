import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: transparent;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  color: inherit;

  ${({ dataAction }) =>
    dataAction === 'close' &&
    ` position: absolute;
    top: 30px;
    right: 40px;
    color: #fff; `}

  > * {
    width: 30px;
    height: 30px;
  }

  :hover {
    opacity: 1;
  }
`;

const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export { Button, ButtonLabel };
