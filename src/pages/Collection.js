/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react'
import { CollectionsContext } from '../context/CollectionContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { css } from '@emotion/react'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import List from '../components/CollectionList'
import { Container } from '../styled'

const CollectionList = () => {
  const { state, addCollection, removeCollection } = useContext(CollectionsContext)
  
  const funcAddCollection = async (e) => {
    const { value: newCollection } = await Swal.fire({
      title: 'Add new Collection',
      input: 'text',
      inputValue: '',
      confirmButtonText:
        'Submit',
      inputAutoTrim: true,
      showCancelButton: true,
      inputValidator: (result) => {
        if(/[^a-zA-Z0-9/]/.test(result) === true)
          return "Collection Name doesn't have special Char"
        if(result === '')
          return "Collection Name cannot be empty"
        if(state.filter(e => e.name.toLowerCase() === result.toLowerCase()).length > 0)
          return "Collection Name already exist"
      }
    })
    if(newCollection && newCollection !== ''){
      const newPayloadCollection = {
        name: newCollection,
        created_at: new Date(),
        data: [],
      }
      const result = state.filter(item => item.name === newCollection)
      if(result.length > 0) {
      }
      else {
        addCollection(newPayloadCollection)
      }
    }
  }

  const funcRemoveCollection = (name) => {
    Swal.fire({
      title: `Delete Collection ${name}?`,
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
          `Collection ${name} has been deleted.`,
          'success'
        )
        removeCollection(name)
      }
    })
  }

  return (
    <Container>
      <h3 css={css`
          font-size: 24px;
          font-weight: bold;
          margin: 40px 0 14px;
      `}>My Collections</h3>
      <button
        css={css`
            margin-left: auto;
            display: block;
            outline: none;
            border: none;
            background: green;
            color: inherit;
            padding: 6px 16px;
            border-radius: 4px;
        `}
        onClick={(e) => funcAddCollection(e)}
        >
        <FontAwesomeIcon icon={faSquarePlus} css={css`margin-right: 6px;`} />
        Add Collection
      </button>
      <List
        state={state}
        funcRemoveCollection={funcRemoveCollection}
        />
    </Container>
  )
}

export default CollectionList