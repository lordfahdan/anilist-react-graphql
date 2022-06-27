import React, { createContext, useReducer, useEffect } from 'react'
import { ACTIONS, CollectionReducer } from './Reducer';

const INIT = localStorage.getItem('collections') 
    ? JSON.parse(localStorage.getItem('collections')) 
    : []

export const CollectionsContext = createContext(INIT);

export const CollectionContextProvider = (props) => {
  const [state, dispatch] = useReducer(CollectionReducer, INIT)
  

  useEffect(() => {
    const sortedCollections = state.sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
    
    localStorage.setItem('collections', JSON.stringify(sortedCollections))
  }, [state])

  const addCollection = (payload) => {
    /*
      - payload must be an Object: { name: '', data: [] }
      - name must be unique
    */
    dispatch({ type: ACTIONS.addCollection, payload})
  }
  
  
  const removeCollection = (payload) => {
    // payload must be the name of the collection
    dispatch({ type: ACTIONS.removeCollection, payload});
  }

  const addCollectionItem = (payload) => {
    // payload must be an Object: { name: <existing-collection>, data: <anime-item> }
    dispatch({ type: ACTIONS.addCollectionItem, payload});
  }

  const getCollectionByName = (payload) => {
    const result = state.filter(item => item.name === payload)[0]
    return result
  }
  


  return (
    <CollectionsContext.Provider
      value={{
        state,
        addCollection,
        removeCollection,
        addCollectionItem,
        getCollectionByName
        }}>
      {props.children}
    </CollectionsContext.Provider>
  )
}