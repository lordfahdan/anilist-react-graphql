import { useSelectionList } from '../api/hooks';
import {
  ButtonLoadMore,
  LoaderContainer,
  TitleSelectionList,
  GridList,
} from '../styled';
import ListItem from './ListItem';
import { getSeason } from '../utlis/getSeason';
import { BeatLoader, PropagateLoader } from 'react-spinners';
import { useState } from 'react';

const DynamicComponent = ({
  title,
  season,
  seasonYear,
  sort,
  type = 'ANIME',
}) => {
  const { loading, error, data, fetchMore } = useSelectionList({
    season,
    seasonYear,
    sort,
    type,
    perPage: 10,
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
          <PropagateLoader size={100} color={'rgb(255, 0, 0, 1)'} />
        </LoaderContainer>
      </>
    );
  if (error)
    return () => {
      console.log(error);
    };

  return (
    <>
      <TitleSelectionList id={title}>
        <h3>{title}</h3>
        <GridList>
          {data.Page.media.map((anime) => (
            <ListItem key={anime.id} anime={anime} />
          ))}
        </GridList>

        {data?.Page.pageInfo.currentPage < data?.Page.pageInfo.lastPage && (
          <ButtonLoadMore onClick={loadmore ? {} : handleLoadMore}>
            {loadmore ? <BeatLoader size={8} color="white" /> : 'Load More'}
          </ButtonLoadMore>
        )}
      </TitleSelectionList>
    </>
  );
};

const SelectionAll = ({ title, model }) => {
  switch (model) {
    case 'season':
      return (
        <DynamicComponent
          model={model}
          title={title}
          season={getSeason(new Date())}
          seasonYear={new Date().getFullYear()}
          sort={'POPULARITY_DESC'}
        />
      );

    case 'trending':
      return (
        <DynamicComponent model={model} title={title} sort={'TRENDING_DESC'} />
      );

    default:
      return null;
  }
};

export default SelectionAll;
