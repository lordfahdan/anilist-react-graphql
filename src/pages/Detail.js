/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react'
import LazyImage from '../components/LazyImage'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useParams, Link } from 'react-router-dom'
import { useAnimeDetail } from '../api/hooks'
import { css } from '@emotion/react'
import { DetailAnime, SinopsisAnime, CardDetailAnime, ButtonBookmark, AddedTitle, AddedCollection } from '../styled'
import { CollectionsContext } from '../context/CollectionContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSquare } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'



const Detail = () => {
  const { state, addCollection, addCollectionItem, getCollectionStatusById, getAllCollectionAddedStatus } = useContext(CollectionsContext);

  const funcAddCollectionItem = async (data) => {
    let arrInput = ["<ul style='display:flex;align-items:flex-start;width:max-content;margin:auto;flex-direction: column;'>", "</ul>"]
    let indexSplice = 0;
    if(state.length > 0){
      state.forEach((e) => {
        if(getCollectionStatusById(e, data.id).notAdded) {
          indexSplice += 1;
          arrInput.splice((indexSplice), 0, `<li><label for="id${e.name}"><input id="id${e.name}" name="collections" type="checkbox" value="${e.name}"> ${e.name}</label></li>`)
        }
      })
      const { value: collections } = await Swal.fire({
        title: 'Choose Collections',
        html: arrInput.join(''),
        focusConfirm: false,
        preConfirm: () => {
          let newArr = []
          const allInput = document.querySelectorAll('input[name="collections"]:checked')
          allInput.forEach((input) => {
            newArr.push(input.value)
          })
          return newArr;
        }
      })
      if(collections && collections.length > 0){
        collections.forEach(e => {
          const obj = {
            name: e,
            data
          }
          addCollectionItem(obj)
        })
      }
    }
    else {
      const { value: collections } = await Swal.fire({
        title: 'Add new Collection',
        input: 'text',
        inputValue: '',
        confirmButtonText:
          'Submit',
        inputAutoTrim: true,
        text: `Create Collection to save ${data.title.romaji}`,
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
      if(collections){
        addCollection({
          name: collections,
          created_at: new Date(),
          data: []
        })
        const obj = {
          name: collections,
          created_at: new Date(),
          data
        }
        addCollectionItem(obj)
      }
    }
    
  }

  let { id } = useParams();
  id = parseInt(id);
  
  const { loading, error, data } = useAnimeDetail(id);

  if(loading) return <h1>Loading...</h1>
  if(error) return () => {console.log(error)}

  const { Media } = data

  return (
    <CardDetailAnime>
      <DetailAnime>
        <div className='bannerAnime'>
          <figure className='cover'>
            <LazyImage src={Media.coverImage.large} alt={Media.title.romaji} />
          </figure>
          <div className='ratingAnime'>
            <div className='ratingPopular'>
              <div className='rating'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <div className='ratingInner' css={css`width: ${Media.averageScore || 0}%;`}>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
              <span>{(Media.averageScore / 10) || 0}</span>
            </div>  
          </div>
        </div>
        <div className='atributAnime'>
          <div className='titleAnime'>
            {Media.title.romaji}
          </div>
          <div className='descAnime'>
            <div className='descAnimeDetail'>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Status : {Media.status}
              </div>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Duration : {Media.duration}
              </div>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Episodes : {Media.episodes}
              </div>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Release Date : {`${Media.startDate.day}/${Media.startDate.month}/${Media.startDate.year}`}
              </div>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Finish Date : {`${Media.endDate.day}/${Media.endDate.month}/${Media.endDate.year}`}
              </div>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Type : {Media.type}
              </div>
              <div>
                <FontAwesomeIcon className='fontAwsome' icon={faSquare} />
                Genres :
              </div>
            </div>
          </div>
          <div className='descAnimeGenre'>
            {
              Media.genres && Media.genres.map((genre, index) => {
                return (
                  <span key={`genre${index}`} className='spanGenre'>{genre}</span>
                )
              })
            }
          </div>
        </div>
      </DetailAnime>
      <AddedTitle>Added Collection: </AddedTitle>
      <AddedCollection>
      {
        state.length > 0 ?
          state && state.map((collection) => (
            getCollectionStatusById(collection, Media.id).added &&
              <Link to={`/collections/${collection.name}`} key={`added${collection.name}`}>{collection.name}</Link>
          ))
          :
          (<span>-</span>)
      }
      </AddedCollection>
      <SinopsisAnime>
        <span className='sinopsisTitle'>Synopsis :</span>
        {
          !Media.description.includes('script') &&
          <p dangerouslySetInnerHTML={{__html: Media.description}}></p>
        }
      </SinopsisAnime>
      {
        state.length > 0 ? 
          getAllCollectionAddedStatus(state, Media.id).added === state.length ?
            (
              <ButtonBookmark css={css`background: grey;`}>
                <FontAwesomeIcon icon={faBookmark} css={css`margin-right: 6px;`} />
                <span>Added to all Collection</span>
              </ButtonBookmark>
            )
            :
            (
              <ButtonBookmark onClick={() => funcAddCollectionItem(Media)}>
                <FontAwesomeIcon icon={faBookmark} css={css`margin-right: 6px;`} />
                <span>Add to Collection</span>
              </ButtonBookmark>
            )
          :
          (
            <ButtonBookmark onClick={() => funcAddCollectionItem(Media)}>
              <FontAwesomeIcon icon={faBookmark} css={css`margin-right: 6px;`} />
              <span>Add to Collection</span>
            </ButtonBookmark>
          )
      }
    </CardDetailAnime>
  )
}

export default Detail;
