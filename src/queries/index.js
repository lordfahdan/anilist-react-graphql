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
        }
        bannerImage
        coverImage {
          medium
          color
        }
      }
    }
  }
`