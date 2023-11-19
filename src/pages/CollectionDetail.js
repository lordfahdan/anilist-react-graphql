/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CollectionsContext } from '../context/CollectionContext'
import { Container, GridList } from '../styled'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import ListItem from '../components/ListItem'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const CollectionDetail = () => {
  
  const { getCollectionByName, removeCollectionItem } = useContext(CollectionsContext)
  const { name: url } = useParams();
  const { name, data } = getCollectionByName(url)


  const funcRemoveCollectionItem = (payload) => {
    Swal.fire({
      title: `Delete ${payload.data.title.romaji} from Collection ${payload.name}?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          `${payload.data.title.romaji} from Collection ${payload.name} has been deleted.`,
          'success'
        )
        removeCollectionItem(payload)
      }
    })
  }

  const Button = styled('button')`
    display: block;
    padding: 6px 0;
    margin-top: 4px;
    width: 100%;
    outline: none;
    border: none;
    font-size: 10px;
    background: rgb(240, 0 ,0);
    color: inherit;
  `

  return (
    <Container>
      <h4 css={css`margin: 10px 0 30px;font-size: 24px;font-weight: bold;`}>Collection {name}</h4>
      {
        data.length > 0 &&
          (<GridList>
            {
              data.map((collection) => {
                return (
                  <div key={`${collection.id}`}>
                    <ListItem anime={collection} />
                    <Button onClick={() => funcRemoveCollectionItem({name, data: collection})}>Remove</Button>
                  </div>
                )
              })
            }
          </GridList>)
      }
      {
        data && data.length === 0 &&
        (<p css={css`display: flex; align-items: center; justify-content: center;height: 40vh; opacity: 0.5;`}>There's no Anime in Collection {name}</p>)
      }
    </Container>
  )
}

export default CollectionDetail