import cloneDeep from 'lodash/cloneDeep';
import {getYesterday} from '../actions/getYesterdayPhotos'

// algorithm:
// deep clone state
// change clone
// return clone

const managePhotos = (state = { photos: [], loading: false, userId: 0, username: '', earthDate: '', photoSaved: false }, action) => {

  switch(action.type) {

    case 'LOADING_PHOTOS':
      return {
        ...state,
        loading: true,
        photoSaved: false
      }

    case 'DEFAULT_PHOTOS':
      return {
        ...state,
        photos: [...action.payload.photos],
        loading: false,
        earthDate: getYesterday(),
        photoSaved: false
      }

    case 'SET_USER':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username,
        photoSaved: false
      }

    case 'NEW_EARTH_DATE':
      return {
        ...state,
        photos: [...action.photos.photos],
        earthDate: action.earthDate,
        photoSaved: false
      }

    case 'PHOTO_SAVED':
      return {
        ...state,
        photoSaved: true
      }

    case 'GET_SAVED_PHOTOS':
      return {
        ...state,
        photos: [...action.payload],
        photoSaved: false
      }

    default:
      return state
  }
}

export default managePhotos