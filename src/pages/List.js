import React from 'react'
import { useQuery } from '@apollo/client'
import { LIST_ANIME_QUERIES } from '../queries'
import ListItem from '../components/ListItem'
import { GridList, LoaderContainer } from '../styled'
import PropagateLoader from "react-spinners/PropagateLoader"

const List = () => {

  const { loading, error, data } = useQuery(LIST_ANIME_QUERIES, {
    variables: {
      page: 400,
      perPage: 16
    }
  });

  if(loading) return (
    <>
      <LoaderContainer>
        <PropagateLoader size={30} color={"rgba(3,172,14, 0.7)"} />
      </LoaderContainer>
    </>
  )
  if(error) return () => {console.log(error)}
  
  const { Page } = data

  return (
    <GridList>
      {
        Page.media.map(item => (
          <ListItem anime={item} key={item.id} />
        ))
      }
    </GridList>
  )
}

export default List
