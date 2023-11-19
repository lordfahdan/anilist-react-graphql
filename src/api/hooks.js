import {
  SEARCH_LIST_QUERIES,
  ANIME_QUERY,
  SELECTION_LIST_QUERIES,
  CHARACTER_LIST,
} from '../queries';
import { useQuery } from '@apollo/client';

export const useSearchList = ({ page, perPage, search }) => {
  return useQuery(SEARCH_LIST_QUERIES, {
    variables: {
      page: page,
      perPage: perPage,
      search,
      isAdult: localStorage.getItem('age_restrict') === '1' ? true : false,
    },
  });
};

export const useAnimeDetail = ({ id }) => {
  return useQuery(ANIME_QUERY, {
    variables: {
      id: id,
      isAdult: localStorage.getItem('age_restrict') === '1' ? true : false,
    },
  });
};

export const useSelectionList = ({
  page = 1,
  perPage = 6,
  type = 'ANIME',
  season,
  seasonYear,
  sort,
}) => {
  return useQuery(SELECTION_LIST_QUERIES, {
    variables: {
      page,
      perPage,
      isAdult: localStorage.getItem('age_restrict') === '1' ? true : false,
      type,
      season,
      seasonYear,
      sort,
    },
  });
};

export const useCharacterList = ({
  page = 1,
  perPage = 10,
  sort = 'FAVOURITES_DESC',
}) => {
  return useQuery(CHARACTER_LIST, {
    variables: {
      page,
      perPage,
      sort,
    },
  });
};
