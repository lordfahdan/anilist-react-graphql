import React from 'react';
import ListItem from './ListItem';
import { GridList } from '../styled';
import Adsense from './Adsense';

const List = ({ data }) => {
  return (
    <section id="list">
      <GridList>
        <Adsense />
        {data.map((item, index) => (
          <ListItem anime={item} key={item.id} />
        ))}
      </GridList>
    </section>
  );
};

export default List;
