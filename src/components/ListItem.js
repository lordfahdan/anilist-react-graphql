/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { GridItem } from '../styled'

export default function ListItem(props) {
  const { anime } = props
  console.log(anime)
  return (
      <GridItem>
        <img css={css`width: 100%;`} src={anime.coverImage.medium} alt="" />
        <h1>{anime.title.romaji}</h1>
      </GridItem>
  )
}
