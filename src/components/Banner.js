/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react'
import { css } from '@emotion/react'
import BackgroundBanner from '../assets/background-banner.webp'

const divBackground = css`
  height: 400px;
  background-size: cover;
  background-image: linear-gradient(black, transparent), url(${BackgroundBanner});
  background-position: center;
  background-blend-mode: saturation;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Banner = forwardRef((props, ref) => {
  return (
    <div ref={ref} css={css`${divBackground}`} >
      <h1 css={css`
        font-size: 40px;
        text-align: center;
        color: black;
        -webkit-text-stroke: 2px white;
      `}>My Anime List Collections</h1>
    </div>
  )
})


export default Banner