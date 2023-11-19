import { useParams } from 'react-router-dom';
import { Container } from '../styled';
import SelectionAll from '../components/SelectionAll';

const SearchSelection = () => {
  const { name } = useParams();

  switch (name) {
    case 'season':
      return (
        <Container>
          <SelectionAll title={'Popular This Season'} model={name} />
        </Container>
      );

    case 'trending':
      return (
        <Container>
          <SelectionAll title={'Trending Now'} model={name} />
        </Container>
      );
    default:
      return (
        <Container>
          Data Not Found
        </Container>
      )
  }
};

export default SearchSelection;
