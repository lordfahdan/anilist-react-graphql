import React from 'react'
import List from '../components/List'
import RingLoader from "react-spinners/RingLoader"
import { useAnimeList } from '../api/hooks'
import { LoaderContainer, ButtonLoadMore } from '../styled'

const Home = () => {

  const { loading, error, data, fetchMore } = useAnimeList(1, 10);

  if(loading) return (
    <>
      <LoaderContainer>
        <RingLoader size={100} color={"rgb(255, 0, 0, 1)"} />
      </LoaderContainer>
    </>
  )
  if(error) return () => {console.log(error)}

  const { Page } = data

  return (
    <> 
      <List data={Page.media} />

      <ButtonLoadMore onClick={() => {
        const { currentPage, lastPage } = Page.pageInfo

        currentPage < lastPage && fetchMore({
          variables: {
            page: currentPage + 1,
            perPage: 10,
          },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            const { media } = prevResult.Page
            const { Page } = fetchMoreResult
            Page.media = [
              ...media,
              ...Page.media
            ];

            return fetchMoreResult
          }
        })
      }}>
        Load More
      </ButtonLoadMore>
    </>
  )
}

export default Home
