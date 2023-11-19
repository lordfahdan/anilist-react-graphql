/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelectionList } from '../api/hooks';
import { LoaderContainer, SectionSelectionList, ShortList } from '../styled';
import ListItem from './ListItem';
import { getSeason } from '../utlis/getSeason';
import { PropagateLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const DynamicComponent = ({
  title,
  season,
  seasonYear,
  sort,
  type = 'ANIME',
  model,
}) => {
  const { loading, error, data } = useSelectionList({
    season,
    seasonYear,
    sort,
    type,
  });

  if (loading)
    return (
      <>
        <LoaderContainer>
          <PropagateLoader size={100} color={'rgb(255, 0, 0, 1)'} />
        </LoaderContainer>
      </>
    );
  if (error)
    return () => {
      console.log(error);
    };

  return (
    <>
      <SectionSelectionList id={title}>
        <div css={css`margin-bottom: 24px`}>
          <h3>{title}</h3>
          <Link to={`/search/${model}`} css={css`
            font-size: 14px;
            color: rgba(255,255,255,0.4);
            transition: color 0.2s;
            :hover {
              color: #fff
            }
          `}>View all</Link>
        </div>
        <ShortList>
          {data.Page.media.map((anime) => (
            <ListItem key={anime.id} anime={anime} />
          ))}
        </ShortList>
      </SectionSelectionList>
    </>
  );
};

const SelectionHome = ({ title, model }) => {
  switch (model) {
    case 'season':
      return (
        <DynamicComponent
          model={model}
          title={title}
          season={getSeason(new Date())}
          seasonYear={new Date().getFullYear()}
          sort={'POPULARITY_DESC'}
        />
      );
    
    case 'trending':
      return (
        <DynamicComponent
          model={model}
          title={title}
          sort={'TRENDING_DESC'}
        />
      )

    default:
      return null;
  }
};

export default SelectionHome;
