import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CollectionsContext } from '../context/CollectionContext'

const CollectionList = () => {
  const { state, addCollection, removeCollection } = useContext(CollectionsContext)
  const [ newCollection, setNewCollection ] = useState('')
  
  const funcAddCollection = (e) => {
    e.preventDefault();
    const newPayloadCollection = {
      name: newCollection,
      created_at: new Date(),
      data: [],
    }
    const result = state.filter(item => item.name === newCollection)
    if(result.length > 0) {
      setNewCollection('')
    }
    else {
      addCollection(newPayloadCollection)
      setNewCollection('')
    }
  }

  const funcRemoveCollection = (name) => {
    removeCollection(name)
  }

  return (
    <>
    <ul>
      {
        state.map(collection => {
          return (
          <li key={collection.name}>- 
            <Link to={`/collections/${collection.name}`}>{collection.name}</Link>
            <button onClick={() => funcRemoveCollection(collection.name)}>Delete</button>
          </li>
          )
        })
      }
    </ul>
    
    <form onSubmit={(e) => funcAddCollection(e)}>
      <input type="text" value={newCollection} onChange={(e) => setNewCollection(e.target.value)} />
      <input type="submit" value="Add new collection" />
    </form>
    </>
  )
}

export default CollectionList