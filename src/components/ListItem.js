/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { GridItem } from '../styled'

const ListItem = (props) => {

  const { anime } = props
  
  // const overlay = css`
  //   position: absolute;
  //   bottom: 0;
  //   width: 100%;
  //   padding: 10px;
  //   padding-top: 20px;
  //   margin-top: 10px;
  //   font-size: 16px;
  //   background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.6) 40%, #000000 100%);

  // `

  // const name = css`
  //   color: #ffffff;
  //   overflow: hidden;
  //   cursor: pointer;
  //   display: -webkit-box;
  //   -webkit-line-clamp: 2;
  //   -webkit-box-orient: vertical;
  // `

  // return (
  //     <GridItem>
  //       <a className="cover">
  //         <img css={css`width: 100%;`} src={anime.coverImage.large} alt="" />
  //         <div css={css`${overlay}`}>
  //           <span css={css`${name}`}>{anime.title.romaji}</span>
  //         </div>
  //       </a>
  //     </GridItem>
  // )

  const name = css`
    margin: 8px 0 4px;
    overflow: hidden;
    cursor: pointer;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
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
      <a className="cover">
        <img src={anime.coverImage.large} alt="" />
      </a>
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