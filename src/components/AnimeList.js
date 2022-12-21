import { RingLoader } from "react-spinners";
import { useAnimeList } from "../api/hooks";
import { ButtonLoadMore, LoaderContainer } from "../styled";
import List from "./List";

const AnimeList = ({search}) => {
  const { loading, error, data, fetchMore } = useAnimeList(1, 10, search? search : undefined);

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

      {Page.pageInfo.currentPage < Page.pageInfo.lastPage && (
        <ButtonLoadMore onClick={() => {
          const { currentPage } = Page.pageInfo
          fetchMore({
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
      )}
    </>
  )
}

export default AnimeList