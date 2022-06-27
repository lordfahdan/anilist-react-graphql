import React from 'react'
import { useParams } from 'react-router-dom'
import { useAnimeDetail } from '../api/hooks'
import LazyImage from '../components/LazyImage'

const Detail = () => {
  
  let { id } = useParams();
  id = parseInt(id)
  
  const { loading, error, data } = useAnimeDetail(id);

  if(loading) return <h1>Loading...</h1>
  if(error) return () => {console.log(error)}

  const { Media } = data
  console.log(Media)

  return (
    <>
      <LazyImage src={Media.bannerImage} alt={Media.title.romaji} />
      <div>{Media.title.romaji}</div>
      {(<p>{Media.description}</p>)}
    </>
  )
}

export default Detail;
