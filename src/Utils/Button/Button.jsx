import StyledButton from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ text, type = 'button', onClick }) => (
  <StyledButton onClick={onClick} type={type}>
    {text}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
