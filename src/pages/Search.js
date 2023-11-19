import SearchComponent from "../components/SearchComponent";
import SearchList from '../components/SearchList';
import { Container } from "../styled";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries(searchParams);

  const handleSubmit = (value) => {
    setSearchParams({
      q: value
    })
  }

  return (
    <Container>
      <SearchComponent defaultValue={queryParams.q} handleSubmit={handleSubmit} />
      <SearchList search={queryParams.q} />
    </Container>
  )
}

export default Search;