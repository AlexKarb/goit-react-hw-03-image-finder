import { Button, ButtonLabel } from './IconButton.styled';
import PropTypes from 'prop-types';

const IconButton = ({ icon, dataAction, type = 'button', onClick }) => (
  <Button type={type} onClick={onClick} dataAction={dataAction}>
    {icon}
    {dataAction && <ButtonLabel>{dataAction}</ButtonLabel>}
  </Button>
);

export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  dataAction: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
