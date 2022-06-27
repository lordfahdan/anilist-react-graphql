import React from 'react'
import ListItem from './ListItem'
import { GridList} from '../styled'

const List = ({ data }) => {

  return (
    <>
      <GridList>
        {
          data.map(item => (
            <ListItem anime={item} key={item.id} />
          ))
        }
      </GridList>

    </>
  )
}

export default List
