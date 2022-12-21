import React from 'react'
import ListItem from './ListItem'
import { GridList} from '../styled'

const List = ({ data }) => {

  return (
    <section id='list'>
      <GridList>
        {
          data.map(item => (
            <ListItem anime={item} key={item.id} />
          ))
        }
      </GridList>

    </section>
  )
}

export default List
