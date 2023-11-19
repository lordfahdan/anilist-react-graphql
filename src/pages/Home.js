import { Container } from '../styled';

import Banner from '../components/Banner';
import SelectionHome from '../components/SelectionHome';
import AdsenseComponent from '../components/AdsenseComponent';

const Home = () => {
  return (
    <>
      <Banner />
      <Container>
        <SelectionHome title={'Popular This Season'} model={'season'} />
        <SelectionHome title={'Trending Now'} model={'trending'} />
        <AdsenseComponent
          style={{ display: 'block' }}
          data-ad-slot="7269559895"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Container>
    </>
  );
};

export default Home;
