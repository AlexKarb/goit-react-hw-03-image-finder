import StyledButton from './Button.styled';

const Button = ({ text, type = 'button', onClick }) => (
  <StyledButton onClick={onClick} type={type}>
    {text}
  </StyledButton>
);

export default Button;
