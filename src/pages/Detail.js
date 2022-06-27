import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAnimeDetail } from '../api/hooks'
import LazyImage from '../components/LazyImage'
import { CollectionsContext } from '../context/CollectionContext'

const Detail = () => {
  const { state, addCollectionItem } = useContext(CollectionsContext);
  const [ choose, setChoose] = useState({
    collections: [],
  });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { collections } = choose;
      
    if (checked) setChoose({ collections: [...collections, value]})
    else setChoose({collections: collections.filter((e) => e !== value)})
  };

  const funcAddCollectionItem = (data) => {
    const { collections } = choose;

    if(collections.length > 0){
      collections.forEach(e => {
        const obj = {
          name: e,
          data
        }
        addCollectionItem(obj)
      })
    }
  }

  let { id } = useParams();
  id = parseInt(id);
  
  const { loading, error, data } = useAnimeDetail(id);

  if(loading) return <h1>Loading...</h1>
  if(error) return () => {console.log(error)}

  const { Media } = data

  return (
    <>
      <LazyImage src={Media.bannerImage} alt={Media.title.romaji} />
      <h4>
        List added Collection:
        {
          state && state.map((collection) => (
            collection.data.length > 0 && collection.data.filter(e => Media.id === e.id).length > 0 &&
              <span key={`added${collection.name}`}>{collection.name}</span>
          ))
        }
      </h4>
      <div>{Media.title.romaji}</div>
      {
        !Media.description.includes('script') &&
        <p dangerouslySetInnerHTML={{__html: Media.description}}></p>
      }

      <h4>List collection:</h4>
      {
        state && state.map((collection) => (
          (collection.data.length === 0 ||  collection.data.filter(e => e.id !== Media.id).length > 0) &&
          <label key={`choose${collection.name}`}>
            <input type="checkbox" value={collection.name} onChange={handleChange} />
            {collection.name}
          </label>
        ))
      }
      <button onClick={() => funcAddCollectionItem(Media)}>Add to Collection</button>
    </>
  )
}

export default Detail;
