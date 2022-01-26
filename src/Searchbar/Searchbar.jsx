import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import { HeaderContainer, StyledForm, FormInput } from './Searchbar.styled';
import IconButton from '../Utils/IconButton/IconButton';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => (
  <HeaderContainer>
    <Formik
      initialValues={{ searchValue: '' }}
      onSubmit={({ searchValue }, { resetForm }) => {
        onSubmit(searchValue.split(' ').join('+'));
        resetForm();
      }}
    >
      <StyledForm>
        <IconButton type="submit " icon={<FcSearch />} dataAction="search" />
        <FormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchValue"
        />
      </StyledForm>
    </Formik>
  </HeaderContainer>
);

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
