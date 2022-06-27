/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionsContext } from '../context/CollectionContext'
import { css } from '@emotion/react'
import List from '../components/List'

const CollectionDetail = () => {
  
  const { getCollectionByName } = useContext(CollectionsContext)
  const { name } = useParams();
  const { data } = getCollectionByName(name)

  return (
    <>
      <h4 css={css`margin: 40px 0;font-size: 24px;font-weight: bold;`}>Collection {name}:</h4>
      <List data={data} />
    </>
  )
}

export default CollectionDetail