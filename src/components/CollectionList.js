/** @jsxImportSource @emotion/react */
import React from 'react'
import CollectionItem from './CollectionItem'
import { GridList } from '../styled'
import { css } from '@emotion/react'

const CollectionList = ({state, funcRemoveCollection}) => {
  return (
    <>
      <div css={css`
        margin: 10px 0;
        background: #212121;
        padding: 20px;
      `}>
        {
          state.length > 0 ? 
            <GridList>
              { state.map(collection => {
                return (
                <CollectionItem
                  collection={collection}
                  funcRemoveCollection={funcRemoveCollection}
                  key={collection.name}
                  />
                )
              })}
            </GridList>
            :
            (<div>There's no Collection</div>)
        }
      </div>
    </>
  )
}

export default CollectionList