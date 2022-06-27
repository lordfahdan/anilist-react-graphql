import React, { createContext, useReducer } from 'react'

export const ACTIONS = {
  addCollection: 'add-collection',
  removeCollection: 'remove-collection',
  addCollectionItem: 'add-collection-item',
  removeCollectionItem: 'remove-collection-item',
}

export const CollectionsContext = createContext();

export const CollectionReducer = (state, action) => {
  switch(action.type) {
    cas
  }
}

const CollectionContextProvider = (props) => {

  const collectionsAnime = localStorage.getItem('collections')? JSON.stringify(localStorage.getItem('collections')) : []

  const [state, dispatch] = useReducer(collectionReducer, { collections: [] })



  return (
    <CollectionsContext.Provider>

    </CollectionsContext.Provider>
  )
}

export default CollectionContext