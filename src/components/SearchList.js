import { RingLoader, BeatLoader } from 'react-spinners';
import { useSearchList } from '../api/hooks';
import { ButtonLoadMore, GridList, LoaderContainer } from '../styled';
import { useState } from 'react';
import ListItem from './ListItem';

const AnimeList = ({ search = '' }) => {
  const { loading, error, data, fetchMore } = useSearchList({
    page: 1,
    perPage: 10,
    search: search ? search : undefined,
  });
  const [loadmore, setLoadmore] = useState(false);

  const handleLoadMore = () => {
    // handle multiple request
    setLoadmore(true);

    // Use the pageInfo from the previous query result to determine the next set of items
    const { currentPage } = data?.Page.pageInfo;
    fetchMore({
      variables: {
        page: currentPage + 1,
        perPage: 10,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const { media } = prevResult.Page;
        const { Page } = fetchMoreResult;
        Page.media = [...media, ...Page.media];
        setLoadmore(false);

        return fetchMoreResult;
      },
    });
  };

  if (loading)
    return (
      <>
        <LoaderContainer>
          <RingLoader size={100} color={'rgb(255, 0, 0, 1)'} />
        </LoaderContainer>
      </>
    );
  if (error)
    return () => {
      console.log(error);
    };

  return (
    <>
      <section id="list">
        <GridList>
          {data.Page.media.map((item) => (
            <ListItem anime={item} key={item.id} />
          ))}
        </GridList>
      </section>

      {data?.Page.pageInfo.currentPage < data?.Page.pageInfo.lastPage && (
        <ButtonLoadMore onClick={loadmore ? {} : handleLoadMore}>
          {loadmore ? <BeatLoader size={8} color="white" /> : 'Load More'}
        </ButtonLoadMore>
      )}
    </>
  );
};

export default AnimeList;
