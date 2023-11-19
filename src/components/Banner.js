/** @jsxImportSource @emotion/react */
import React, { forwardRef } from 'react';
import { css } from '@emotion/react';
import BackgroundBanner from '../assets/background-banner.webp';
import SearchComponent from './SearchComponent';
import { useNavigate } from 'react-router-dom';

const divBackground = css`
  height: 400px;
  background-size: cover;
  background-image: linear-gradient(black, transparent),
    url(${BackgroundBanner});
  background-position: center;
  background-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;\
  position: relative;
`;

const divSearchContainer = css`
  position: absolute;
  bottom: 70px;
  left:10px;
  right: 10px;
  max-width: 800px;
  margin: auto
`

const Banner = forwardRef((props, ref) => {
  const navigate = useNavigate()

  const onSubmitSearch = (value) => {
    navigate(`/search?q=${value}`)
  }

  return (
    <div
      ref={ref}
      css={css`
        ${divBackground}
      `}
    >
      <h1
        css={css`
          font-size: 40px;
          text-align: center;
          color: black;
          -webkit-text-stroke: 2px white;
          @media (min-width: 768px) {
            font-size: 70px;
          -webkit-text-stroke: 3px white;
          }
        `}
      >
        LordNime List
      </h1>
      <div css={css`${divSearchContainer}`}>
        <SearchComponent handleSubmit={onSubmitSearch} />
      </div>
    </div>
  );
});

export default Banner;
