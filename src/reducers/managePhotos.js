import cloneDeep from 'lodash/cloneDeep';

// algorithm:
// deep clone state
// change clone
// return clone

const managePhotos = (state = { photos: [], loading: false, userId: 0 }, action) => {

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
        loading: false
      }

    case 'SET_USER':
      return {
        ...state,
        userId: action.payload.id
      }

    default:
      return state
  }
}

export default managePhotos