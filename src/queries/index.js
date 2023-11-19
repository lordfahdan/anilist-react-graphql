import { gql } from '@apollo/client';

export const SEARCH_LIST_QUERIES = gql`
  query ($page: Int, $perPage: Int, $search: String, $isAdult: Boolean) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $search, isAdult: $isAdult) {
        id
        title {
          romaji
          native
        }
        bannerImage
        coverImage {
          large
          color
        }
        averageScore
        popularity
      }
    }
  }
`;

export const ANIME_QUERY = gql`
  query ($id: Int, $isAdult: Boolean) {
    Media(id: $id, isAdult: $isAdult) {
      id
      title {
        romaji
        native
      }
      bannerImage
      coverImage {
        large
        color
      }
      description
      averageScore
      popularity
      genres
      status
      episodes
      duration
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      type
    }
  }
`;

export const SELECTION_LIST_QUERIES = gql`
  query (
    $page: Int
    $perPage: Int
    $isAdult: Boolean
    $type: MediaType
    $season: MediaSeason
    $seasonYear: Int
    $sort: [MediaSort]
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(
        isAdult: $isAdult
        type: $type
        season: $season
        seasonYear: $seasonYear
        sort: $sort
      ) {
        id
        title {
          romaji
          native
        }
        coverImage {
          large
          color
        }
        popularity
        averageScore
      }
    }
  }
`;

export const CHARACTER_LIST = gql`
  query ($page: Int, $perPage: Int, $sort: [CharacterSort]) {
    Page(page: $page, perPage: $perPage) {
      characters(sort: $sort) {
        id
        name {
          first
          middle
          last
          full
          native
          userPreferred
        }
        gender
        age
        image {
          large
        }
        favourites
      }
    }
  }
`;
