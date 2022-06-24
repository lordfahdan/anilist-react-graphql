import React from 'react'
import { useQuery } from '@apollo/client'
import { LIST_ANIME_QUERIES } from '../queries'
import ListItem from './ListItem'

export default function List() {

  const { loading, error, data } = useQuery(LIST_ANIME_QUERIES, {
    variables: {
      page: 1,
      perPage: 10
    }
  });

  if(loading) return <h1>Loading...</h1>
  if(error) return () => {console.log(error)}
  
  const { Page } = data

  return (
    <>
      {
        Page.media.map(item => (
          <ListItem anime={item} key={item.id} />
        ))
      }
    </>
  )
}
