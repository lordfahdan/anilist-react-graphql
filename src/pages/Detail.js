import React from 'react'
import { useQuery } from '@apollo/client'
import { ANIME_QUERIES } from '../queries'
import { useParams } from 'react-router-dom'

export default function Detail() {
  
  let { id } = useParams();
  id = parseInt(id)
  
  const { loading, error, data } = useQuery(ANIME_QUERIES, {
    variables: {
      id: id,
    }
  });

  if(loading) return <h1>Loading...</h1>
  if(error) return () => {console.log(error)}

  console.log(data)

  return (
    <div>{id}</div>
  )
}
