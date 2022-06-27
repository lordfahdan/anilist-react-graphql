import React from 'react'
import ListItem from './ListItem'
import { GridList} from '../styled'

const List = ({ data }) => {
  const { Page } = data

  return (
    <>
      <GridList>
        {
          Page.media.map(item => (
            <ListItem anime={item} key={item.id} />
          ))
        }
      </GridList>

    </>
  )
}

export default List
