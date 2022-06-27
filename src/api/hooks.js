import { LIST_ANIME_QUERIES, ANIME_QUERIES } from '../queries';
import { useQuery } from '@apollo/client';

export const useAnimeList = (page, perPage) => {

  const {data, loading, error, fetchMore} = useQuery(LIST_ANIME_QUERIES, {
    variables: {
      page: page,
      perPage: perPage
    }
  });

  return {
    data,
    loading,
    error,
    fetchMore,
  };
};

export const useAnimeDetail = (id) => {

  const {data, loading, error} = useQuery(ANIME_QUERIES, {
    variables: {
      id: id,
    }
  });

  return {
    data,
    loading,
    error
  };
};

