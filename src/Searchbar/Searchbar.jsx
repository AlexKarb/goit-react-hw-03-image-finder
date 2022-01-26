import { HeaderContainer, StyledForm, FormInput } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import IconButton from '../Utils/IconButton/IconButton';
import { Formik } from 'formik';

const Searchbar = ({ onSubmit }) => (
  <HeaderContainer>
    <Formik
      initialValues={{ searchValue: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
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
