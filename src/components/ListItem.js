/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import LazyImage from '../components/LazyImage'

const ListItem = (props) => {

  const { anime } = props
  
  const GridItem = styled('div')`
    display: grid;
    grid-template-rows: min-content auto;
    padding: 4px;
    border-radius: 6px;
    background: linear-gradient(140deg, ${anime.coverImage.color} 0%, #ffffff 60%);

    figure.cover {
      border-radius: 6px;
      cursor: pointer;
      display: inline-block;
      height: 50vw;
      overflow: hidden;
      width: 100%;
      position: relative
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    @media (min-width: 576px) {
      figure.cover {
        height: 185px;
      }
    }

    @media (min-width: 992px) {
      figure.cover {
        height: 265px;
      }
    }
  `;

  const name = css`
    margin: 8px 0 4px;
    overflow: hidden;
    cursor: pointer;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 10px;
    color: #333;
    @media (min-width: 576px) {}
    @media (min-width: 768px) {
      font-size: 16px
    }
    @media (min-width: 992px) {}
    @media (min-width: 1200px) {}
  `

  const ratingPopular = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
  `
  const rating = css`
    color: lightgrey;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  `

  const rattingInner = css`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    color: #fab81e;
    width: ${anime.averageScore || 0}%;
  `

  const popular = css`
    i {
      margin-left: 4px;
    }
  `

  return (
    <GridItem>
      <figure className='cover'>
        <LazyImage src={anime.coverImage.large} alt={anime.title.romaji} />
      </figure>
      <span css={css`${name}`}>{anime.title.romaji}</span>
      <div css={css`${ratingPopular}`}>
        <div css={css`${rating}`}>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <div css={css`${rattingInner}`}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>
        <div css={css`${popular}`}>
          {anime.popularity}
          <i className="fa-solid fa-eye"></i>
        </div>
      </div>
    </GridItem>
  )
}

export default ListItem