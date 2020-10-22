import cloneDeep from 'lodash/cloneDeep';
import {getYesterday} from '../actions/getYesterdayPhotos'

// algorithm:
// deep clone state
// change clone
// return clone

const managePhotos = (state = { photos: [], loading: false, userId: 0, username: '', earthDate: '' }, action) => {

  switch(action.type) {

    case 'LOADING_PHOTOS':
      return {
        ...state,
        loading: true
      }

    case 'DEFAULT_PHOTOS':
      return {
        ...state,
        photos: [...action.payload.photos],
        loading: false,
        earthDate: getYesterday()
      }

    case 'SET_USER':
      return {
        ...state,
        userId: action.payload.id,
        username: action.payload.username
      }

    case 'NEW_EARTH_DATE':
      return {
        ...state,
        photos: [...action.photos.photos],
        earthDate: action.earthDate
      }

    default:
      return state
  }
}

export default managePhotos