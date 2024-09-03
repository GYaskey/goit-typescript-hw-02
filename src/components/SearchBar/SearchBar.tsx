import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FaSearch } from 'react-icons/fa';
import s from './SearchBar.module.css';
import * as Yup from 'yup';

interface SearchBarProps {
  handleChangeQuery: (query: string) => void;
}

type Value = {
  search: string;
};

type Options = {
  resetForm: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleChangeQuery }) => {
  const initialValue = { search: '' };

  const handleSubmit = (value: Value, options: Options) => {
    handleChangeQuery(value.search.trim());
    options.resetForm();
  };

  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

  return (
    <header className={s.header}>
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={searchSchema}
      >
        <Form className={s.form}>
          <label htmlFor="searchID" className={s.label}>
            <FaSearch />
          </label>
          <Field
            id="searchID"
            name="search"
            type="text"
            autoComplete="off"
            placeholder="Type your request..."
            className={s.input}
          />
          <ErrorMessage name="search" component="div" className={s.error} />
          <button className={s.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
