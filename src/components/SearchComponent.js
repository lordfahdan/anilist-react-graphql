import { useState, useRef } from 'react';
import Input from '../components/Input';
import { InputContainer } from '../styled';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchComponent = ({ handleSubmit }) => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');

  const funcSubmit = (e, value) => {
    e.preventDefault();
    handleSubmit(value);
    setSearch('')
    inputRef.current.blur();
    window.scrollTo({
      top: document.getElementById('list').getBoundingClientRect().top || 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <InputContainer onSubmit={(e) => funcSubmit(e, search)}>
        <Input
          placeholder="Search manga..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          ref={inputRef}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </InputContainer>
    </>
  );
};

export default SearchComponent;
