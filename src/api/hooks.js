import { LIST_ANIME_QUERIES, ANIME_QUERIES } from '../queries';
import { useQuery } from '@apollo/client';

export const useAnimeList = (page, perPage, search) => {

  const {data, loading, error, fetchMore} = useQuery(LIST_ANIME_QUERIES, {
    variables: {
      page: page,
      perPage: perPage,
      search
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

