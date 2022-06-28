/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'
import LazyImage from './LazyImage'
import EmptyImage from '../assets/empty-collection.webp'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faSquareMinus } from '@fortawesome/free-solid-svg-icons'

const CollectionItem = ({ collection, funcRemoveCollection }) => {

  const Card = styled(Link)`
    display: block;
    text-decoration: unset;
    color: inherit;
    background: #343434;
    border-radius: 4px;
    cursor: pointer;
    padding: 6px;
  `

  const Figure = styled('figure')`
    border-radius: 4px;
    height: 30vw;
    overflow: hidden;
    @media (min-width: 576px) {
      height: 140px;
    }
    @media (min-width: 992px) {
      height: 180px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  `

  const title = css`
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 10px;
    @media (min-width: 576px) {
      font-size: 12px;
    }
    @media (min-width: 992px) {
      font-size: 14px;
    }
  `

  const Button = styled('button')`
    display: block;
    padding: 6px 0;
    width: 100%;
    outline: none;
    border: none;
    font-size: 10px;
    background: rgb(240, 0 ,0);
    color: inherit;
  `

  return (
    <div>
      <Card to={`/collections/${collection.name}`}>
        <div css={css`
          padding: 6px 0;
          overflow: hidden;
        `}>
          <span css={css`${title}`}>{collection.name}</span>
        </div>
        <Figure>
          <LazyImage src={collection.data[0]? collection.data[0].coverImage.large : EmptyImage} />
        </Figure>
        <div css={css`
          margin: 12px 0 0;
          border-top: 1px solid #555555;
          padding: 6px 10px 4px;
          font-size: 10px;
          opacity: 0.6;
        `}>
          <FontAwesomeIcon icon={faClone} css={css`margin-right: 6px;`} />
          { `${collection.data.length} ${collection.data.length > 1? 'items' : 'item'}` }
        </div>
      </Card>
      <Button onClick={() => funcRemoveCollection(collection.name)}>
        <FontAwesomeIcon icon={faSquareMinus} css={css`margin-right: 6px;`} />
        Delete
      </Button>
    </div>
  )
}

export default CollectionItem