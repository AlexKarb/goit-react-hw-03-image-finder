import { Button, ButtonLabel } from './IconButton.styled';

const IconButton = ({ icon, dataAction, type = 'button', onClick }) => (
  <Button type={type} onClick={onClick} dataAction={dataAction}>
    {icon}
    {dataAction && <ButtonLabel>{dataAction}</ButtonLabel>}
  </Button>
);

export default IconButton;
