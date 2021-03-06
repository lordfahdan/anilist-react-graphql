import { gql } from '@apollo/client'

export const LIST_ANIME_QUERIES = gql`
  query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media {
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
  }
`

export const ANIME_QUERIES = gql`
query ($id: Int) {
  Media(id: $id) {
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
`