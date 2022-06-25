import React from 'react'
import { useQuery } from '@apollo/client'
import { LIST_ANIME_QUERIES } from '../queries'
import ListItem from '../components/ListItem'
import { GridList } from '../styled'

export default function List() {

  const { loading, error, data } = useQuery(LIST_ANIME_QUERIES, {
    variables: {
      page: 400,
      perPage: 10
    }
  });

  if(loading) return <h1>Loading...</h1>
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
