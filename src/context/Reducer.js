export const ACTIONS = {
  addCollection: 'add-collection',
  removeCollection: 'remove-collection',
  addCollectionItem: 'add-collection-item',
  removeCollectionItem: 'remove-collection-item',
}

export const CollectionReducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.addCollection:
      return [...state, action.payload]

    case ACTIONS.removeCollection:
      return state.filter(collection => collection.name !== action.payload)

    case ACTIONS.addCollectionItem:
      const other = state.filter(item => item.name !== action.payload.name)
      const result = state.filter(item => item.name === action.payload.name)[0]
      return [...other, { ...result, data: [...result.data, action.payload.data]}]
      
    case ACTIONS.removeCollectionItem:
      const others = state.filter(item => item.name !== action.payload.name)
      const results = state.filter(item => item.name === action.payload.name)[0]
      return [...others, { ...results, data: results.data.filter(e => e.id !== action.payload.data.id)}]
    default:
      return state
  }
}