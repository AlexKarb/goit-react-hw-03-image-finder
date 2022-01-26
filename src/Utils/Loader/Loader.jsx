import 'react-loader-spinner';
import Spiner from './Loader.styled';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <Spiner>
    <TailSpin width={40} height={40} color="blue" ariaLabel="loading" />
  </Spiner>
);

export default Loader;
